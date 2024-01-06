import React from 'react';
import { toast } from 'react-toastify';
import style from '../Footer.module.css';
import { OutlineButton } from '../../../../UI/Button/OutlineButton/OutlineButton';

const SupportMe = () => {

    function showTooltipSupport() {
        toast('❤️ Спасибо за поддержку');
    }

    return (
        <OutlineButton onClick={showTooltipSupport} className={style.extra}>Поддержать</OutlineButton>
    );
};

export default SupportMe;
