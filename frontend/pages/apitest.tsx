import type { NextPage, GetStaticProps } from "next";
import { useRouter } from 'next/router';
import { Box, Divider, Heading, Text, Container, useColorModeValue, SimpleGrid, Button, FormControl, Input, InputGroup, InputLeftAddon, InputRightElement } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface Words {
    [key: string]: string;
}


const ApiTest: NextPage = () => {
    return (
        <>
            <Box p={24}>
                <Text>Result</Text>
                <Text>{process.env.BEARER_TOKEN}</Text>
                <Text>Words</Text>
                <Text>License</Text>
            </Box>
        </>
    );
}

export default ApiTest;