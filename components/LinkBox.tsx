import { FormControl, InputGroup, InputLeftAddon, Input, InputRightElement, Button, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";

interface LinkBoxProps {
    url: string;
}

export const LinkBox: React.FC<LinkBoxProps> = ({ url }) => {
    const [copyStatus, setCopyStatus] = useState(false);
    const urlPrefix : string = "https://4cil.ga/";

    const handleCopyStatus = ((text: string) => {

        navigator.clipboard.writeText(text)
            .then(() => {
                console.log("License URL has copied!");
            }, (err) => {
                console.error("Something error has occured: ", err);
            });
        if (!copyStatus) {
            setCopyStatus(true);
        }
    });

    return (
        <FormControl>
            <InputGroup>
                <InputLeftAddon children={urlPrefix} />
                <Input
                    pr="4.5rem"
                    type={"text"}
                    placeholder={url}
                />
                <InputRightElement width='6rem' px={2}>
                    <Button h="1.75rem" size="sm"
                        bg={copyStatus ? "green.400" : useColorModeValue("gray.100", "gray.700")}
                        color={copyStatus ? "white" : ""}
                        _hover={{
                            bg: "green.500",
                            color: "white"
                        }}
                        onClick={() => handleCopyStatus(urlPrefix + url)}
                    >
                        {copyStatus ? "COPIED!" : "COPY"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
    );
};

export default LinkBox;