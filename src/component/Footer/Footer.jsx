import React from 'react';
import Support from "./Support";
import Error from "./Error";
import Base from "./Base";

const Footer = () => {

    return (
        <div className={'footer'}>
            <div className={'leftBlock'}>
                <Support/>
                <a href="https://github.com/derus15/MathGame" className={'extra'} target="_blank">ГитХаб</a>
                <Error/>
                <Base/>
            </div>
            <div className={'rightBlock'}>
                <div className={'extra'}>Темная</div>
                <div className={'extra'}>v 0.12.3</div>
            </div>
        </div>
    );
};

export default Footer;