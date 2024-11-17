import React, { ReactNode } from 'react';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { BoosterModal } from 'features/BoosterPack/UI/BoosterPack/BoosterModal/BoosterModal';

interface PageLayoutProps {
    children: ReactNode,
}

export const PageLayout = ({ children }: PageLayoutProps) => (
    <div className="mainContainer">
        <Header />
        {children}
        <BoosterModal />
        <Footer />
    </div>
);
