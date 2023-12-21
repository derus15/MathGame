import React from 'react';
import { toast } from 'react-toastify';

const Support = () => {

    function showTooltipSupport() {
        toast('❤️ Спасибо за поддержку');
    }

    return (
        <div>
            <div onClick={showTooltipSupport} className="extra">Поддержать</div>
        </div>
    );
};

export default Support;
