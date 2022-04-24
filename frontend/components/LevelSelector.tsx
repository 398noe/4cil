import { FormControl, Text, Container, Select, Box, Heading, HStack, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import NextLink from "next/link";

interface LevelSelectorProps { }

export const LevelSelector: React.FC<LevelSelectorProps> = () => {
    const [NPermission, setNPermission] = useState<string>("0");
    const [CPermission, setCPermission] = useState<string>("0");

    const handleNPermission = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setNPermission(e.target.value);
    }

    const handleCPermission = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setCPermission(e.target.value);
    }

    return (
        <Container maxW={"container.lg"} p={8}>
            <Box textAlign={"center"}>
                <FormControl>
                    <HStack justify="center" flexWrap={"wrap"}>
                        <Heading size="xl">N</Heading>
                        <Select value={NPermission} size="lg" variant="flushed" onChange={handleNPermission} id="NLevel" w={24}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </Select>
                        <Heading size="xl">C</Heading>
                        <Select value={CPermission} size="lg" variant="flushed" onChange={handleCPermission} id="CLevel" w={24}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </Select>
                        <Heading size="xl" pr={8}>ライセンス</Heading>
                        <NextLink href={"/n" + NPermission + "c" + CPermission} passHref>
                            <Button size="lg"
                                color="white"
                                as={"a"}
                                bg={"green.400"}
                                _hover={{
                                    bg: "green.500",
                                    color: "white"
                                }}
                            >
                                Go!
                            </Button>
                        </NextLink>
                    </HStack>
                </FormControl>
                <Text color={'gray.500'} p={2}>
                    非商用利用レベル{NPermission} : 商用利用レベル{CPermission}
                </Text>
            </Box>
        </Container>
    );
};

export default LevelSelector;