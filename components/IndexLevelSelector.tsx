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

    return (
        <Container maxW={"container.lg"} p={8}>
            <Text as={"span"} fontSize={["4xl", "5xl"]} fontWeight={700}>Let&apos;s TRY</Text>
            <Text as={"h2"} fontSize={["2xl"]} pb={8}>???????????????????????????????????????????????????????????????????????????</Text>
            <Container>
                <SimpleGrid columns={3} spacing={2} alignItems={"center"}>
                    <Text></Text>
                    <Text textAlign={"center"}>???????????????</Text>
                    <Text textAlign={"center"}>????????????</Text>
                    <Text>??????</Text>
                    <FormControl>
                        <Select value={NPermission.Use} onChange={handleNPermission} id="NUse">
                            <option value="o">????????????</option>
                            <option value="x">???????????????</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <Select value={CPermission.Use} onChange={handleCPermission} id="CUse">
                            <option value="o">????????????</option>
                            <option value="x">???????????????</option>
                        </Select>
                    </FormControl>
                    <Text>????????????</Text>
                    <FormControl>
                        <Select value={NPermission.Edit} onChange={handleNPermission} id="NEdit">
                            <option value="o">????????????</option>
                            <option value="x">???????????????</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <Select value={CPermission.Edit} onChange={handleCPermission} id="CEdit">
                            <option value="o">????????????</option>
                            <option value="x">???????????????</option>
                        </Select>
                    </FormControl>
                    <Text>?????????</Text>
                    <FormControl>
                        <Select value={NPermission.Redist} onChange={handleNPermission} id="NRedist">
                            <option value="o">????????????</option>
                            <option value="x">???????????????</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <Select value={CPermission.Redist} onChange={handleCPermission} id="CRedist">
                            <option value="o">????????????</option>
                            <option value="x">???????????????</option>
                        </Select>
                    </FormControl>
                    <Text>?????????????????????</Text>
                    <FormControl>
                        <Select value={NPermission.Credit} onChange={handleNPermission} id="NCredit">
                            <option value="oo">??????</option>
                            <option value="xo">?????????????????????</option>
                            <option value="xx">??????</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <Select value={CPermission.Credit} onChange={handleCPermission} id="CCredit">
                            <option value="oo">??????</option>
                            <option value="xo">?????????????????????</option>
                            <option value="xx">??????</option>
                        </Select>
                    </FormControl>
                </SimpleGrid>
            </Container>
            <Text as={"h2"} fontSize={["2xl"]} pt={8} pb={2}>????????????????????????</Text>
            <Box textAlign={"center"}>
                <NextLink href={"/n" + level[0] + "c" + level[1]} passHref>
                    <Heading as="a" size="xl" mt={6} mb={2}>
                        N{level[0]}C{level[1]}???????????????
                    </Heading>
                </NextLink>
                <Text color={'gray.500'}>
                    ????????????????????????{level[0]} : ?????????????????????{level[1]}
                </Text>
            </Box>
            <Text as={"h2"} fontSize={["2xl"]} pt={8} pb={2}>??????????????????????????????????????????????????????????????????????????????????????????</Text>
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