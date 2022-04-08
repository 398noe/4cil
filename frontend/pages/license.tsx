import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { Box, Divider, Heading, Text, Container, useColorModeValue, SimpleGrid, Button, FormControl, Input, InputGroup, InputLeftAddon, InputRightElement } from '@chakra-ui/react';
import LinkBox from '../components/LinkBox';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';

const splitNC = (str: string) => {
    const handleStr = str + "xxxx";
    return [handleStr.slice(0, 2), handleStr.slice(2, 4)];
}
const splitLevel = (str: string) => {
    return Number(str.slice(1, 2));
}

const License: NextPage = () => {
    return (
        <>

            <Box textAlign="center" pt={24} pb={8} px={6}>
                <Heading as="h2" size="xl" mt={6} mb={2}>
                    ライセンス一覧
                </Heading>
                <Text color={'gray.500'}>
                    4CILで使用できるライセンス一覧
                </Text>
            </Box>
            <Divider color={useColorModeValue("gray.200", "gray.800")} />
            <Container maxW={"container.lg"} p={8}>
                <Text as={"span"} fontSize={["2xl", "3xl"]} fontWeight={700}>URL形式</Text>
                <Text as={"h2"} pb={4}>4CILのライセンス形式は以下の4文字の組み合わせになっています</Text>
                <Text as={"h3"} textAlign="center" fontSize={["4xl"]} fontWeight={700} pb={4}>「【N】【数字】【C】【数字】」</Text>
                <Text as={"p"} fontSize={["xl"]} pb={4}>1文字目のNはNot commercial, 非商用利用向けを意味しています</Text>
                <Text as={"p"} fontSize={["xl"]} pb={4}>2文字目の数字は非商用利用向けに許可するレベルを意味しています</Text>
                <Text as={"p"} fontSize={["xl"]} pb={4}>3文字目のCはCommercial, 商用利用向けを意味しています</Text>
                <Text as={"p"} fontSize={["xl"]} pb={4}>4文字目の数字は商用利用向けに許可するレベルを意味しています</Text>
                <Text as={"h2"} pb={4}>数字は0から7を指定することができ、それぞれ以下の意味を示します</Text>
            </Container>
            <Container maxW={"container.lg"} p={8}>
                <Text>ここに表を展開</Text>
            </Container>
            <Container>
                <Text>ここにレベル選択とそのライセンスに飛ぶことのできるURL生成器を作成</Text>
            </Container>
            <Divider color={useColorModeValue("gray.200", "gray.800")} />
            <Container maxW={"container.lg"} p={8}>
                <Text as={"span"} fontSize={["2xl", "3xl"]} fontWeight={700}>このライセンスを使用したい！</Text>
                <Text as={"h2"} pt={8} pb={2}>以下のリンクを素材のライセンス先のリンクに貼り付けてください</Text>
                <LinkBox path="/n5n3" />
            </Container>
        </>
    );
}

export default License;