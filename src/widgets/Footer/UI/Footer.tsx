import React from 'react';
import SupportMe from './elements/SupportMe';
import KnowledgeBase from './elements/KnowledgeBase';
import ThemeSwitcher from './elements/ThemeSwitcher';
import VersionHistory from './elements/VersionHistory';
import style from './Footer.module.css';
import GithubLink from './elements/GithubLink';
import ErrorReport from './elements/ErrorReport';
import { classNames } from 'shared/lib/classNames/classNames';

interface FooterProps {
    className?: string,
}
 
export const Footer = ({ className }: FooterProps) => (
    <footer className={classNames(style.footer, {}, [className])}>
        <div className={style.leftBlock}>
            <SupportMe />
            <GithubLink />
            <ErrorReport />
            <KnowledgeBase />
        </div>
        <div className={style.rightBlock}>
            <ThemeSwitcher />
            <VersionHistory />
        </div>
    </footer>
);
