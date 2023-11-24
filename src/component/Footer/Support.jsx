import React from 'react';
import Toast from '../../UI/Toaster/Toast';
import { toast } from 'react-toastify';

const Support = () => {

    function showTooltipSupport() {
        toast('❤️ Спасибо за поддержку');
    }

    return (
        <div>
            <div onClick={showTooltipSupport} className="extra">Поддержать</div>
            <Toast />
        </div>
    );
};

export default Support;
