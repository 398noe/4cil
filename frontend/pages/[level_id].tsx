import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from 'next/router';
import { apiClient } from "../utils/apiClient";
import { LicenseItem, LicenseItems, LicensesAttributes } from "../api/licenses";
import { Box, Divider, Heading, Text, Container, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
import LinkBox from '../components/LinkBox';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import { urlCheck } from "../utils/urlCheck";

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
                <Text as={"h2"} py={4}>このライセンスを持つ素材は、非商用利用目的での
                    {
                        licenses.filter((license => license.level == level[0])).map((data) => {
                            return data.description;
                        })
                    }
                </Text>
                <Text as={"h2"} pb={4}>このライセンスを持つ素材は、商用利用目的での
                    {
                        licenses.filter((license => license.level == level[1])).map((data) => {
                            return data.description;
                        })
                    }
                </Text>
            </Container>
            <Container maxW={"container.lg"} p={8}>
                <SimpleGrid columns={3} spacing={2} alignItems={"center"}>
                    <Box />
                    <Text color="blue.500" textAlign="center"><FontAwesomeIcon icon={faCircle} size="6x" /></Text>
                    <Text color="red.500" textAlign="center"><FontAwesomeIcon icon={faXmark} size="6x" /></Text>
                    <Box />
                    <Text textAlign={"center"}>許可されるもの</Text>
                    <Text textAlign={"center"}>許可されないもの</Text>
                    <Text>非商用利用</Text>
                    <Box>
                        {
                            licenses.filter((license => license.level == level[0])).map((data) => {
                                // get permission
                            })
                        }
                        <Text>素材の利用・加工改変・再配布</Text>
                        <Text>利用・再配布いずれもクレジット表記が必要</Text>
                    </Box>
                    <Box></Box>
                    <Text>商用利用</Text>
                    <Box>
                        <Text>素材の利用・加工改変</Text>
                        <Text>利用にあたってクレジット表記は不要</Text>
                    </Box>
                    <Box>
                        <Text>素材の再配布</Text>
                    </Box>
                </SimpleGrid>
            </Container>
            <Divider color={useColorModeValue("gray.200", "gray.800")} />
            <Container maxW={"container.lg"} p={8}>
                <Text as={"span"} fontSize={["2xl", "3xl"]} fontWeight={700}>このライセンスを使用したい！</Text>
                <Text as={"h2"} pt={8} pb={2}>以下のリンクを素材のライセンス先のリンクに貼り付けてください</Text>
                <LinkBox url="n5n3" />
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
    }
    const token = process.env.BEARER_TOKEN;
    // Access Strapi API
    const licensesRes = await apiClient.licenses.get({ headers: { Authorization: `Bearer ${token}` } });

    // Licenses データを再構築
    let licenses: LicenseItems = [];
    licensesRes.body.data.filter((data => data.attributes.level == level[0] || data.attributes.level == level[1])).map((data) => {
        licenses.push({
            description: data.attributes.description,
            level: data.attributes.level,
            allow: data.attributes.allow,
            disallow: data.attributes.disallow
        });
    });
    /*
    licensesRes.body.data.map((data) => {
        licenses.push({
            description: data.attributes.description,
            level: data.attributes.level,
            allow: data.attributes.allow,
            disallow: data.attributes.disallow
        });
    });
    */

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
