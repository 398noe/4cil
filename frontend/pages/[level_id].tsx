import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from 'next/router';
import { apiClient } from "../utils/apiClient";
import { Box, Divider, Heading, Text, Container, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
import LinkBox from '../components/LinkBox';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import { LicenseItem } from "../api/licenses";

type Level = [number, number];

const Level: NextPage = () => {
    const router = useRouter();
    const { level_id } = router.query;
    const regex = new RegExp("n[0-7]c[0-7]");
    const [level, setLevel] = useState<Level>([0, 0]);
    // Words
    // license

    /**
     * URL Check
     */
    useEffect(() => {
        if (router.isReady) {
            const link: string = (level_id + "xxxx").slice(0, 4);
            console.log(level_id);
            console.log(link);

            // if url is correct
            if (urlCheck(link, regex)) {
                console.log("URL is OK.");
                setLevel([Number(link.slice(1, 2)), Number(link.slice(3, 4))]);
            } else {
                // if url is invalid
                console.log("URL is NG.");
                router.replace("/404");
            }
        }
        // fetch word and license data

    }, [level_id, router]);

    const urlCheck = (str: string, regex: RegExp) => {
        return regex.test(str);
    }

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
                <Text as={"h2"} py={4}>このライセンスを持つ素材は、非商用利用目的での素材の利用・加工改変・再配布が許可されます。素材の利用・再配布時にはともにクレジット表記が必要です</Text>
                <Text as={"h2"} pb={4}>このライセンスを持つ素材は、商用利用目的での素材の利用・加工改変が許可されます。素材の再配布は許可されません。素材の利用にあたってクレジット表記は不要です</Text>
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
 * @returns words and license data
 */
export const getStaticProps: GetStaticProps = async () => {
    const token = process.env.BEARER_TOKEN;
    // Access Strapi API
    const wordRes = await apiClient.word.get({ headers: { Authorization: `Bearer ${token}` } });
    const licensesRes = await apiClient.licenses.get({ headers: { Authorization: `Bearer ${token}` } });

    // Words 定義を取得
    const words = wordRes.body.data.attributes.list;
    // Licenses データを再構築
    let licenses: Array<LicenseItem> = [];
    licensesRes.body.data.map((data) => {
        licenses.push({
            description: data.attributes.description,
            level: data.attributes.level,
            permission: data.attributes.permission
        });
    });

    return {
        props: {
            words, licenses
        }
    }
}

export const getStaticPaths: GetStaticPaths<{ level_id: string }> = async () => {
    return {
        paths: [],
        fallback: "blocking"
    }
}