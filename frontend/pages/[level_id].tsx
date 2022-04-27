import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { urlCheck } from "../utils/urlCheck";
import { LicenseItems } from "../api/licenses";
import { Level } from "../types/level";

import LinkBox from '../components/LinkBox';

import { Box, Divider, Heading, Text, Container, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import Head from "next/head";
import { getLicenseData } from "../utils/getLicenseData";


interface LevelProps {
    licenses: LicenseItems;
    level: Level;
};

const Level: NextPage<LevelProps> = ({ licenses, level }) => {
    const baseUrl: string = process.env.NEXT_PUBLIC_APP_URL ?? "";
    return (
        <>
            <Head>
                <meta property="og:title" content="4CIL - 最強の、四文字属性。" />
                <meta property="og:site_name" content="4 Character Internet License" />
                <meta property="og:description" content="4CILは著作物の利用規約をすぐに意思表明できるサービスです" />
                <meta property="og:url" content="https://4cil.ga" />
                <meta property="og:type" content="website" />
                <meta name="twitter:site" content="@398noe" />
                <meta name="twitter:creator" content="@398noe" />
                <meta
                    property="og:image"
                    key="ogImage"
                    content={`${baseUrl}/api/${"n" + level[0] + "c" + level[1]}/ogp`}
                />
                <meta
                    name="twitter:card"
                    key="twitterCard"
                    content="summary_large_image"
                />
                <meta
                    name="twitter:image"
                    key="twitterImage"
                    content={`${baseUrl}/api/${"n" + level[0] + "c" + level[1]}/ogp`}
                />
            </Head>
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
            <Container maxW={"container.lg"} p={8} pb={12}>
                <Text as={"span"} fontSize={["2xl", "3xl"]} fontWeight={700}>このライセンスを使用したい！</Text>
                <Text as={"h2"} pt={8} pb={2}>以下のリンクを素材のライセンス先のリンクに貼り付けてください</Text>
                <LinkBox path={"/n" + level[0] + "c" + level[1]} />
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

    const licenses = getLicenseData(level);
    
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
