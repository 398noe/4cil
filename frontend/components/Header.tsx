import { ReactNode } from 'react';
import NextLink from "next/link";
import {
    Box,
    Flex,
    Text,
    Link,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('white', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box pos="fixed" zIndex={100} w="full" bg={useColorModeValue('white', 'gray.900')}>
            <Flex h={16} px={4} alignItems={'center'} justifyContent={'space-between'}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.800')}>
                <Box px={2}><NextLink href="/" passHref><Button as="a" variant="ghost"><Text fontSize={24} fontWeight={700}>4CIL</Text></Button></NextLink></Box>

                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={2}>
                        <NextLink href="/license" passHref>
                            <Button variant="ghost" as="a"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                        </NextLink>
                        <NextLink href="https://github.com/398noe/4cil" passHref>
                            <Button variant="ghost" as="a"><FontAwesomeIcon icon={faGithub} /></Button>
                        </NextLink>
                        <Button onClick={toggleColorMode} variant="ghost">
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    );
}