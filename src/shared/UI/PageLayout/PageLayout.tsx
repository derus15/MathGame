import React, { ReactNode } from 'react';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { useLocation } from 'react-router-dom';

interface PageLayoutProps {
    children: ReactNode,
}

export const PageLayout = ({ children }: PageLayoutProps) => {

    const location = useLocation();
    const hideFooter = location.pathname === '/account';
        
    return (
        <div className="mainContainer">
            <Header />
            {children}
            {!hideFooter && <Footer />}
        </div>
    );
};
