import type { NextPage } from "next";
import NextLink from "next/link";
import {
    Box,
    Button,
    Container,
    Flex,
    Show,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faArrowPointer, faUniversalAccess, faShareNodes, faLink } from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from "react";
import IndexLevelSelector from "../components/IndexLevelSelector";
import Head from "next/head";


interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
}


const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>4CIL - 最強の、四文字属性。</title>
                <meta property="og:title" content="4CIL - 最強の、四文字属性。" />
                <meta property="og:site_name" content="4 Character Internet License" />
                <meta property="og:description" content="4CILは著作物の利用規約をすぐに意思表明できるサービスです" />
                <meta property="og:url" content="https://4cil.ga" />
                <meta property="og:image" content="https://4cil.ga/ogp.png" />
                <meta property="og:type" content="website" />
                <meta name="twitter:site" content="@398noe" />
                <meta name="twitter:creator" content="@398noe" />
                <meta
                    name="twitter:image"
                    key="twitterImage"
                    content="https://4cil.ga/ogp.png"
                />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Stack minH={"60vh"} direction={{ base: "column", md: "row" }} bg={useColorModeValue('gray.50', 'gray.900')}>
                <Flex px={8} pt={20} pb={8} flex={1} align={"center"}>
                    <Stack spacing={6} w={"full"} maxW={"max"}>
                        <Text as="h1" fontSize={["5xl", "7xl"]} fontWeight={700}>最強の、<Show below="sm"><br /></Show>四文字属性。</Text>
                        <Text as="h2" fontSize={["2xl", "5xl"]} fontWeight={400}>4 Character Internet License</Text>
                        <Text fontSize={"xl"} color={"gray.500"}>
                            4CILは著作物の利用規約をすぐに意思表明できるサービスです
                        </Text>
                        <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                            <NextLink href="#try" passHref>
                                <Button
                                    bg={"blue.400"}
                                    color={"white"}
                                    size={"lg"}
                                    _hover={{
                                        bg: "blue.500",
                                    }}>
                                    <Text pr={2}>使ってみる</Text>
                                    <FontAwesomeIcon icon={faArrowPointer} />
                                </Button>
                            </NextLink>
                            <NextLink href="/license" passHref>
                                <Button
                                    as={"a"}
                                    bg={"green.400"}
                                    color={"white"}
                                    size={"lg"}
                                    _hover={{
                                        bg: "green.500",
                                    }}>
                                    <Text pr={2}>ライセンス一覧</Text>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </Button>
                            </NextLink>
                        </Stack>
                    </Stack>
                </Flex>
            </Stack>
            <Container maxW={"container.lg"} p={8}>
                <Text as={"span"} fontSize={["4xl", "5xl"]} fontWeight={700}>About</Text>
                <Text as={"h2"} fontSize={["2xl"]} pb={8}>4CILは著作物の利用規約をすぐに意思表明できるサービスです</Text>
                <Text color={"gray.500"}>著作物の利用規約は各サイトによって様々であり、利用者は各サイトの利用規約をサイトごとに確認する必要があります。また、利用規約を書く側にとっては、他サイトの文を参考に長い利用規約を記す必要があります。4CILは、そのような手間を減らすべく、リンクを貼ることで簡単に著作物の利用規約、特にその著作物の利用と加工改変、再配布に関する意思表明ができるお手伝いをします</Text>
            </Container>
            <Container maxW={"container.lg"} p={8}>
                <Text as={"span"} fontSize={["4xl", "5xl"]} fontWeight={700}>Features</Text>
                <Text as={"h2"} fontSize={["2xl"]} pb={8}>4CILは以下の特徴を持っています</Text>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    <Feature
                        icon={<Text color="blue.500" ><FontAwesomeIcon icon={faUniversalAccess} size="8x" /></Text>}
                        title={"4文字のチカラ"}
                        text={
                            "4CILはライセンスの種類を4文字で表します。例えば「N7C7」を選ぶことで、非商用・商用問わず、素材の使用・加工改変・再配布を許可、クレジット表記不要と意思表明することができます"
                        }
                    />
                    <Feature
                        icon={<Text color="green.500"><FontAwesomeIcon icon={faShareNodes} size="8x" /></Text>}
                        title={"見やすいライセンス"}
                        text={
                            "4CILはOGPに対応しています。TwitterやFacebook・DiscordなどOGPに対応したWebサービスにリンクを貼ることで、リンクが画像として表示され、ライセンス内容を素早く表示することが可能です"
                        }
                    />
                    <Feature
                        icon={<Text color="yellow.400"><FontAwesomeIcon icon={faLink} size="8x" /></Text>}
                        title={"素材ごとにリンク可能"}
                        text={
                            "4CILはライセンスの種類をURLで提供します。これによって、従来の利用規約よりも柔軟に、素材ごとにライセンスの種類を意思表明することができます"
                        }
                    />
                </SimpleGrid>
            </Container>
            <Box id="try">
                <IndexLevelSelector />
            </Box>
        </>
    );
}

const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
        <Stack
            align={"center"}>
            <Flex
                w={32}
                h={32}
                align={"center"}
                justify={"center"}
                color={"white"}
                rounded={"full"}
                mb={1}>
                {icon}
            </Flex>
            <Text fontSize={"2xl"} fontWeight={600}>{title}</Text>
            <Text fontSize={"base"} color={"gray.600"}>{text}</Text>
        </Stack>
    );
};

export default Home
