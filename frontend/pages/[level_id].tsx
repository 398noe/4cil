import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { apiClient } from "../utils/apiClient";
import { urlCheck } from "../utils/urlCheck";
import { LicenseItems } from "../api/licenses";
import LinkBox from '../components/LinkBox';

import { Box, Divider, Heading, Text, Container, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from '@fortawesome/free-regular-svg-icons';

type Level = [number, number];
interface LevelProps {
    licenses: LicenseItems;
    level: Level;
};

const Level: NextPage<LevelProps> = ({ licenses, level }) => {
    return (
        <>
            <Box textAlign="center" pt={24} pb={8} px={6}>
                <Heading as="h2" size="xl" mt={6} mb={2}>
                    N{level[0]}C{level[1]}ライセンス
                </Heading>
                <Text color={'gray.500'}>
                    非商用利用レベル{level[0]} : 商用利用レベル{level[1]}
                </Text>
            </Box>
            <Divider color={useColorModeValue("gray.200", "gray.800")} />
            <Container maxW={"container.lg"} p={8}>
                <Text as={"span"} fontSize={["2xl", "3xl"]} fontWeight={700}>説明</Text>
                <Text as={"h2"} py={4}>このライセンスを持つ素材は、非商用利用目的での{licenses[0].description}</Text>
                <Text as={"h2"} pb={4}>このライセンスを持つ素材は、商用利用目的での{licenses[1].description}</Text>
            </Container>
            <Container maxW={"container.lg"} p={8}>
                <SimpleGrid columns={3} spacing={2} alignItems={"center"}>
                    <Box />
                    <Text color="blue.500" textAlign="center"><FontAwesomeIcon icon={faCircle} size="6x" /></Text>
                    <Text color="red.500" textAlign="center"><FontAwesomeIcon icon={faXmark} size="6x" /></Text>
                </SimpleGrid>
                <SimpleGrid columns={3} spacing={2} alignItems={"center"}>
                    <Box />
                    <Text textAlign={"center"}>許可されるもの</Text>
                    <Text textAlign={"center"}>許可されないもの</Text>
                </SimpleGrid>
                {
                    licenses.map((data, index) => {
                        return (
                            <SimpleGrid key={index} columns={3} spacing={2} alignItems={"center"}>
                                <Text>{index === 0 ? "非" : ""}商用利用</Text>
                                <Text>{data.allow}</Text>
                                <Text>{data.disallow}</Text>
                            </SimpleGrid>
                        );
                    })
                }
            </Container>
            <Divider color={useColorModeValue("gray.200", "gray.800")} />
            <Container maxW={"container.lg"} p={8}>
                <Text as={"span"} fontSize={["2xl", "3xl"]} fontWeight={700}>このライセンスを使用したい！</Text>
                <Text as={"h2"} pt={8} pb={2}>以下のリンクを素材のライセンス先のリンクに貼り付けてください</Text>
                <LinkBox url="n5c3" />
            </Container>
        </>
    );
};

export default Level;

/**
 * Get contents from strapi.
 * @returns license data
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const link: string = (params?.level_id + "xxxx").slice(0, 4);
    const regex = new RegExp("n[0-7]c[0-7]");
    let level: Level = [0, 0];
    // if url is correct
    if (urlCheck(link, regex)) {
        level = [Number(link.slice(1, 2)), Number(link.slice(3, 4))];
    } else {
        return {
            notFound: true
        }
    }
    const token = process.env.BEARER_TOKEN;
    // Access Strapi API
    const licensesRes = await apiClient.licenses.get({ headers: { Authorization: `Bearer ${token}` } });

    // Licenses データを再構築
    let licenses: LicenseItems = [];
    for (let i = 0; i < level.length; i++) {
        licensesRes.body.data.filter((data => data.attributes.level == level[i])).map((data) => {
            licenses.push({
                description: data.attributes.description,
                level: data.attributes.level,
                allow: data.attributes.allow,
                disallow: data.attributes.disallow
            });
        });
    }
    return {
        props: {
            licenses, level
        }
    }
}

export const getStaticPaths: GetStaticPaths<{ level_id: string }> = async () => {
    return {
        paths: [],
        fallback: "blocking"
    }
}
