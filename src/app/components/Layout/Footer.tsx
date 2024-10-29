
'use client';
import React from 'react';
import { Box, Flex, Text, IconButton, Link } from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <Flex as="footer" width="full" align="center" justifyContent="space-between" p={4} bg="blue.500" color="white">
            <Text fontSize="sm">
                © {new Date().getFullYear()} MyApp. All rights reserved.
            </Text>
            <Box>
                <Link href="/privacy" mr={4}><Text fontSize="sm">Privacy Policy</Text></Link>
                <Link href="/terms"><Text fontSize="sm">Terms of Service</Text></Link>
            </Box>
            <Box>
                <IconButton
                    aria-label="Twitter"
                    icon={<FaTwitter />}
                    size="lg"
                    isRound={true}
                    colorScheme="teal"
                    onClick={() => window.open('https://twitter.com', '_blank')}
                />
                <IconButton
                    aria-label="Facebook"
                    icon={<FaFacebook />}
                    size="lg"
                    isRound={true}
                    colorScheme="teal"
                    ml={2}
                    onClick={() => window.open('https://facebook.com', '_blank')}
                />
                <IconButton
                    aria-label="LinkedIn"
                    icon={<FaLinkedin />}
                    size="lg"
                    isRound={true}
                    colorScheme="teal"
                    ml={2}
                    onClick={() => window.open('https://linkedin.com', '_blank')}
                />
            </Box>
        </Flex>
    );
};

export default Footer;
