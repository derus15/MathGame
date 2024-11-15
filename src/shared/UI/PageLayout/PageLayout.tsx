import React, { ReactNode } from 'react';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';

interface PageLayoutProps {
    children: ReactNode,
}

export const PageLayout = ({ children }: PageLayoutProps) => (
    <div className="mainContainer">
        <Header />
        {children}
        <Footer />
    </div>
);
