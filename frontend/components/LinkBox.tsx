import { FormControl, InputGroup, InputLeftAddon, Input, InputRightElement, Button, useColorModeValue, useClipboard } from "@chakra-ui/react";
import React, { useState } from "react";

interface LinkBoxProps {
    path: string;
}

export const LinkBox: React.FC<LinkBoxProps> = ({ path }) => {
    const urlPrefix: string = (process.env.NEXT_PUBLIC_APP_URL == undefined ? "https://4cil.ga" : process.env.NEXT_PUBLIC_APP_URL);

    const [url, setUrl] = useState(urlPrefix + path);
    const { hasCopied, onCopy } = useClipboard(url);

    return (
        <FormControl>
            <InputGroup>
                <Input
                    pr="4.5rem"
                    type={"text"}
                    isReadOnly
                    placeholder={url}
                    _placeholder={{color: useColorModeValue("black","white")}}
                />
                <InputRightElement width='6rem' px={2}>
                    <Button h="1.75rem" size="sm"
                        bg={hasCopied ? "green.400" : useColorModeValue("gray.100", "gray.700")}
                        color={hasCopied ? "white" : ""}
                        _hover={{
                            bg: "green.500",
                            color: "white"
                        }}
                        onClick={onCopy}
                    >
                        {hasCopied ? "COPIED!" : "COPY"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
    );
};

export default LinkBox;