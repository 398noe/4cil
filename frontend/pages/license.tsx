import type { GetStaticProps, NextPage } from 'next'
import { Box, Divider, Heading, Text, Container, useColorModeValue, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { apiClient } from '../utils/apiClient';
import { LicenseItems } from '../api/licenses';
import LevelSelector from '../components/LevelSelector';

interface LicenseProps {
    licenses: LicenseItems;
}

const License: NextPage<LicenseProps> = ({ licenses }) => {
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
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>ライセンスレベル表</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>レベル</Th>
                                <Th>説明</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                licenses.map((data, index) => {
                                    return (
                                        <Tr key={index}>
                                            <Td>{data.level}</Td>
                                            <Td>{data.description}</Td>
                                        </Tr>
                                    );
                                })
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Container>
            <Divider color={useColorModeValue("gray.200", "gray.800")} />
            <Container maxW={"container.lg"} p={8}>
                <Text as={"span"} fontSize={["2xl", "3xl"]} fontWeight={700}>ライセンスを使用したい！</Text>
                <Text as={"h2"} pt={8} pb={2}>上のレベル表から、使用したいライセンスレベルの数字を選択して、ページに飛んでください</Text>
                <LevelSelector />
            </Container>
        </>
    );
}

export default License;

/**
 * Get contents from strapi.
 * @returns license data
 */
export const getStaticProps: GetStaticProps = async () => {
    const token = process.env.BEARER_TOKEN;
    // Access Strapi API
    const licensesRes = await apiClient.licenses.get({ headers: { Authorization: `Bearer ${token}` } });

    // Licenses データを再構築
    let licenses: LicenseItems = [];
    licensesRes.body.data.map((data) => {
        licenses.push({
            description: data.attributes.description,
            level: data.attributes.level,
            allow: data.attributes.allow,
            disallow: data.attributes.disallow
        });
    });
    return {
        props: {
            licenses
        }
    }
}
