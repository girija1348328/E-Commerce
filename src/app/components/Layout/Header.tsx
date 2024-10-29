'use client';
import React from 'react';
import { Box, Flex, Text, Button, useColorMode } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex as="header" width="full" align="center" justifyContent="space-between" p={4} bg="blue.500" color="white">
            <Flex align="center">
                <Text fontSize="2xl" fontWeight="bold" mr={10}>
                    {/* <Link to="/">MyApp</Link> */}
                </Text>
                {/* <Link to="/about"><Text mr={4}>About</Text></Link> */}
                {/* <Link to="/services"><Text>Services</Text></Link> */}
            </Flex>
            <Flex align="center">
                <Button onClick={toggleColorMode} mr={4}>
                    {colorMode === 'light' ? 'Dark' : 'Light'} Mode
                </Button>
                <Button colorScheme="blue" variant="outline">
                    Log In
                </Button>
            </Flex>
        </Flex>
    );
};

export default Header;
