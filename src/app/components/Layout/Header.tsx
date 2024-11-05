import React from 'react';
import {
    Box, Flex, Text, Button, HStack, InputGroup, Input, Menu, MenuButton, MenuList, MenuItem, Icon, Container, Divider, Grid
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <Container maxW="100%" p={4} bg="white">
            <Flex as="header" direction="row" align="center" justify="space-between" width="full" mb={4}>
                <Text fontSize="2xl" fontWeight="bold" color="black">
                    IG_Ecommerce
                </Text>

                <HStack spacing={10}>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="blue">
                            <Text color="black">Categories</Text>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Electronics</MenuItem>
                            <MenuItem>Clothing</MenuItem>
                            <MenuItem>Accessories</MenuItem>
                            <MenuItem>Home Goods</MenuItem>
                        </MenuList>
                    </Menu>
                    <InputGroup size="md">
                        <Input placeholder="Search for products" />
                        <Button backgroundColor="#0068c9" borderRadius="md">
                            <Text color="white" textStyle="bold">SEARCH</Text>
                        </Button>
                    </InputGroup>
                </HStack>

                <HStack spacing={5}>
                    {[{ icon: faHeadphones, text: "Need Help?", subText: "+08 92298228" },
                    { icon: faUser, text: "My Account", subText: "Login" },
                    { icon: faCartShopping, text: "My Cart", subText: "$0.00" }
                    ].map((item, index) => (
                        <Flex key={index} align="center">
                            <Icon as={FontAwesomeIcon} icon={item.icon} boxSize="10" color="black" mr={2} />
                            <Box>
                                <Text color="black">{item.text}</Text>
                                <Text color="lightblue">{item.subText}</Text>
                            </Box>
                        </Flex>
                    ))}
                </HStack>
            </Flex>
            <Divider orientation="horizontal" borderColor="gray.200" mb={4} />

            <Grid templateColumns="repeat(6, 1fr)" gap={6}>
                {['Laptop', 'Mobile', 'Headphone', 'Speaker', 'Smartphone','Games'].map((content, index) => (
                    <Box key={index} bg="gray.100" p={4} borderRadius="md" boxShadow="md">
                        <Text fontWeight="bold">{content}</Text>
                    </Box>
                ))}
            </Grid>

            <Box>
                
            </Box>
        </Container>
    );
};

export default Header;
