import React, { ReactNode } from 'react';
import { Footer } from 'widgets/Footer';

interface PageLayoutProps {
    hideFooter?: boolean,
    children: ReactNode,
}

export const PageLayout = ({ hideFooter = false, children }: PageLayoutProps) => (
    <>
        {children}
        {!hideFooter && <Footer />}
    </>
);
