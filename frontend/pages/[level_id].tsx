import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { Box, Divider, Heading, Text, Container, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
import LinkBox from '../components/LinkBox';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';

type Level = [number, number];

const Level: NextPage = () => {
    const router = useRouter();
    const { level_id } = router.query;
    const regex = new RegExp("n[0-7]c[0-7]");
    const [level, setLevel] = useState<Level>([0, 0]);

    /**
     * URL Check
     */
    useEffect(() => {
        if(router.isReady) {
            const link: string = (level_id + "xxxx").slice(0,4);
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
    }, [level_id, router]);

    const urlCheck = (str: string, regex: RegExp) => {
        return regex.test(str);
    }

    return (
        <>

            <Box textAlign="center" pt={24} pb={8} px={6}>
                <Heading as="h2" size="xl" mt={6} mb={2}>
                    N5C3ライセンス
                </Heading>
                <Text color={'gray.500'}>
                    非商用利用レベル5 : 商用利用レベル3
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