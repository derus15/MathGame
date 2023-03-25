import React from 'react';
import Support from "./Support";
import Error from "./Error";
import Base from "./Base";
import Theme from "./Theme";
import Version from "./Version";

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
                <Theme/>
                <Version/>
            </div>
        </div>
    );
};

export default Footer;