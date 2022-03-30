import { ReactNode } from 'react';
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
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box pos="fixed" zIndex={100} w="full" bg={useColorModeValue('white', 'gray.900')}>
            <Flex h={16} px={4} alignItems={'center'} justifyContent={'space-between'}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.800')}>
                <Box px={2}><Link href={"/"}><Text fontSize={24} fontWeight={700}>4CIL</Text></Link></Box>

                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={2}>
                        <Button variant="ghost"><FontAwesomeIcon icon={faGithub} /></Button>
                        <Button onClick={toggleColorMode} variant="ghost">
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    );
}