import { Heading, Text, Button, Stack, Flex } from '@chakra-ui/react';

export default function NotFound() {
    return (
        <Stack minH={"100vh"} textAlign="center" py={10} px={6}>
            <Flex p={8} flex={1} align={'center'} justify={'center'} direction={"column"}>
                <Heading
                    display="inline-block"
                    as="h2"
                    size="2xl"
                    bg="blue.400"
                    backgroundClip="text">
                    404
                </Heading>
                <Text fontSize="18px" mt={3} mb={2}>
                    Page Not Found
                </Text>
                <Text color={'gray.500'} mb={6}>
                    お探しのページは見つかりませんでした…
                </Text>

                <Button
                    bg="blue.400"
                    color="white"
                    variant="solid"
                    as="a"
                    href="/">
                    ホームに戻る
                </Button>
            </Flex>
        </Stack>
    );
}