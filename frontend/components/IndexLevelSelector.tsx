import { FormControl, Text, Container, Select, SimpleGrid, Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Level } from "../types/level";
import { LinkBox } from "./LinkBox";
import NextLink from "next/link";

interface IndexLevelSelectorProps { }

interface Permission {
    Use: string;
    Edit: string;
    Redist: string;
    Credit: string;
}

export const IndexLevelSelector: React.FC<IndexLevelSelectorProps> = () => {
    const initData: Permission = {
        Use: "x",
        Edit: "x",
        Redist: "x",
        Credit: "xx"
    }
    const [NPermission, setNPermission] = useState<Permission>(initData);
    const [CPermission, setCPermission] = useState<Permission>(initData);

    const [level, setLevel] = useState<Level>([levelSelector(NPermission), levelSelector(CPermission)]);

    const handleNPermission = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const id = e.target.id;
        if (id == "NUse") {
            setNPermission({
                ...NPermission,
                Use: e.target.value
            });
        } else if (id == "NEdit") {
            setNPermission({
                ...NPermission,
                Edit: e.target.value
            });
        } else if (id == "NRedist") {
            setNPermission({
                ...NPermission,
                Redist: e.target.value
            });
        } else if (id == "NCredit") {
            setNPermission({
                ...NPermission,
                Credit: e.target.value
            });
        }

    }

    const handleCPermission = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const id = e.target.id;
        if (id == "CUse") {
            setCPermission({
                ...CPermission,
                Use: e.target.value
            });
        } else if (id == "CEdit") {
            setCPermission({
                ...CPermission,
                Edit: e.target.value
            });
        } else if (id == "CRedist") {
            setCPermission({
                ...CPermission,
                Redist: e.target.value
            });
        } else if (id == "CCredit") {
            setCPermission({
                ...CPermission,
                Credit: e.target.value
            });
        }

    }

    useEffect(() => {
        setLevel([levelSelector(NPermission), levelSelector(CPermission)]);
    }, [NPermission, CPermission]);



    const ShowLinkBox = (): JSX.Element => {
        return (
            <LinkBox path={"/n" + level[0] + "c" + level[1]} />);
    }


    return (
        <Container maxW={"container.lg"} p={8}>
            <Text as={"span"} fontSize={["4xl", "5xl"]} fontWeight={700}>Let's TRY</Text>
            <Text as={"h2"} fontSize={["2xl"]} pb={8}>以下の選択肢を選ぶだけで簡単にリンクを生成できます</Text>
            <Container>
                <SimpleGrid columns={3} spacing={2} alignItems={"center"}>
                    <Text></Text>
                    <Text textAlign={"center"}>非商用利用</Text>
                    <Text textAlign={"center"}>商用利用</Text>
                    <Text>利用</Text>
                    <FormControl>
                        <Select value={NPermission.Use} onChange={handleNPermission} id="NUse">
                            <option value="o">許可する</option>
                            <option value="x">許可しない</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <Select value={CPermission.Use} onChange={handleCPermission} id="CUse">
                            <option value="o">許可する</option>
                            <option value="x">許可しない</option>
                        </Select>
                    </FormControl>
                    <Text>加工改変</Text>
                    <FormControl>
                        <Select value={NPermission.Edit} onChange={handleNPermission} id="NEdit">
                            <option value="o">許可する</option>
                            <option value="x">許可しない</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <Select value={CPermission.Edit} onChange={handleCPermission} id="CEdit">
                            <option value="o">許可する</option>
                            <option value="x">許可しない</option>
                        </Select>
                    </FormControl>
                    <Text>再配布</Text>
                    <FormControl>
                        <Select value={NPermission.Redist} onChange={handleNPermission} id="NRedist">
                            <option value="o">許可する</option>
                            <option value="x">許可しない</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <Select value={CPermission.Redist} onChange={handleCPermission} id="CRedist">
                            <option value="o">許可する</option>
                            <option value="x">許可しない</option>
                        </Select>
                    </FormControl>
                    <Text>クレジット表記</Text>
                    <FormControl>
                        <Select value={NPermission.Credit} onChange={handleNPermission} id="NCredit">
                            <option value="oo">必要</option>
                            <option value="xo">再配布のみ必要</option>
                            <option value="xx">不要</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <Select value={CPermission.Credit} onChange={handleCPermission} id="CCredit">
                            <option value="oo">必要</option>
                            <option value="xo">再配布のみ必要</option>
                            <option value="xx">不要</option>
                        </Select>
                    </FormControl>
                </SimpleGrid>
            </Container>
            <Text as={"h2"} fontSize={["2xl"]} pt={8} pb={2}>適したライセンス</Text>
            <Box textAlign={"center"}>
                <NextLink href={"/n" + level[0] + "c" + level[1]} passHref>
                    <Heading as="a" size="xl" mt={6} mb={2}>
                        N{level[0]}C{level[1]}ライセンス
                    </Heading>
                </NextLink>
                <Text color={'gray.500'}>
                    非商用利用レベル{level[0]} : 商用利用レベル{level[1]}
                </Text>
            </Box>
            <Text as={"h2"} fontSize={["2xl"]} pt={8} pb={2}>以下のリンクを素材のライセンス先のリンクに貼り付けてください</Text>
            <LinkBox path={"/n" + level[0] + "c" + level[1]} />
        </Container>
    );
};

export default IndexLevelSelector;

const levelSelector = (p: Permission): number => {
    if (p.Use == "x") {
        return 0;
    } else if (p.Edit == "x") {
        if (p.Credit == "oo") {
            return 1;
        } else {
            return 2;
        }
    } else if (p.Redist == "x") {
        if (p.Credit == "oo") {
            return 3;
        } else {
            return 4;
        }
    } else {
        if (p.Credit == "oo") {
            return 5;
        } else if (p.Credit == "xo") {
            return 6;
        } else {
            return 7;
        }
    }
    return 0;
}