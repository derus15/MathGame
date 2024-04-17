import React, { ReactNode } from 'react';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';

interface PageLayoutProps {
    hideFooter?: boolean,
    children: ReactNode,
}

export const PageLayout = ({ hideFooter = false, children }: PageLayoutProps) => (
    <>
        <Header />
        {children}
        {!hideFooter && <Footer />}
    </>
);
