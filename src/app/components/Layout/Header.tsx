import React from 'react';
import { Box, Flex, Text, Button, useColorMode, HStack, InputGroup, Input, Menu, MenuButton, MenuList, MenuItem, IconButton, Stack } from '@chakra-ui/react';
import { ChevronDownIcon, Icon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex as="header" width="full" align="center" justifyContent="space-between" p={4} bg="white" color="white">
            <Flex align="center">
                <Text fontSize="2xl" fontWeight="bold" mr={10} color="black">
                    Girija_Ecommerce
                </Text>
            </Flex>

            <HStack gap="10" width="full" align="center" backgroundColor="white" width="400px">
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="white">
                        <Text color="black">All Categories</Text>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Electronics</MenuItem>
                        <MenuItem>Clothing</MenuItem>
                        <MenuItem>Accessories</MenuItem>
                        <MenuItem>Home Goods</MenuItem>
                    </MenuList>
                </Menu>
                <HStack width="120%">
                    <InputGroup >
                        <Input placeholder="Search for products" />
                    </InputGroup>
                    <Button background="#0068c9" borderRadius="0px">
                        <Text color="White">SEARCH</Text>
                    </Button>
                </HStack>
            </HStack>

            <HStack spacing="22">
                <Box>
                    <Icon as={FontAwesomeIcon} icon={faHeadphones} color="black" height="40px" width="40px" />

                </Box>
                <Box>
                    <Text color="black">
                        Need Help?
                    </Text>
                    <Text color="lightblue">
                        +08 92298228
                    </Text>
                </Box>

                <Box>
                    <Icon as={FontAwesomeIcon} icon={faUser} color="black" height="40px" width="40px" />

                </Box>
                <Box>
                    <Text color="black">
                        My Account
                    </Text>
                    <Text color="lightblue">
                        Login
                    </Text>
                </Box>

                <Box>
                    <Icon as={FontAwesomeIcon} icon={faCartShopping} color="black" height="40px" width="40px" />

                </Box>
                <Box>
                    <Text color="black">
                        My Cart
                    </Text>
                    <Text color="lightblue">
                        $0.00
                    </Text>
                </Box>
            </HStack>
            <Flex align="center">
                {/* <Button onClick={toggleColorMode} mr={4}>
                    {colorMode === 'light' ? 'Dark' : 'Light'} Mode
                </Button> */}
                {/* <Button colorScheme="blue" variant="outline">
                    Log In
                </Button> */}
            </Flex>
        </Flex>
    );
};

export default Header;
