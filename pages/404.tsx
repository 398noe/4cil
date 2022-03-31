import { Box, Heading, Text, Button, Stack, Flex } from '@chakra-ui/react';

export default function NotFound() {
    return (
        <Stack minH={"100vh"} textAlign="center" py={10} px={6}>
            <Flex p={8} flex={1} align={'center'} justify={'center'} direction={"column"}>
                <Heading
                    display="inline-block"
                    as="h2"
                    size="2xl"
                    bgGradient="linear(to-r, teal.400, teal.600)"
                    backgroundClip="text">
                    404
                </Heading>
                <Text fontSize="18px" mt={3} mb={2}>
                    Page Not Found
                </Text>
                <Text color={'gray.500'} mb={6}>
                    The page you're looking for does not seem to exist
                </Text>

                <Button
                    colorScheme="teal"
                    bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                    color="white"
                    variant="solid"
                    as="a"
                    href="/">
                    Go to Home
                </Button>
            </Flex>
        </Stack>
    );
}