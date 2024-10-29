'use client';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Stack } from '@chakra-ui/react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Stack minHeight="100vh" justifyContent="space-between">
            <Header />
            {children}
            <Footer />
        </Stack>
    );
};

export default Layout;
