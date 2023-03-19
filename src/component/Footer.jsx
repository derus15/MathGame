import React from 'react';

const Footer = () => {
    return (
        <div className={'footer'}>
            <div className={'leftBlock'}>
                <a href="">Поддержать</a>
                <a href="">Гитхаб</a>
                <a href="">Сообщить об ошибке</a>
                <a href="">База знаний</a>
            </div>
            <div className={'rightBlock'}>
                <div>Темная</div>
                <div>v 0.12.3</div>
            </div>
        </div>
    );
};

export default Footer;