import React, {useState} from 'react';
import Tooltip from "../../UI/Tooltip/Tooltip";

const Support = () => {

    const [tooltipSupport, setTooltipSupport] = useState(false);

    function showTooltipSupport() {
        setTooltipSupport(true);
    }

    return (
        <div>
            <div onClick={showTooltipSupport} className={'extra'}>Поддержать</div>
            {(tooltipSupport)
            ?
            <Tooltip
                setShow={setTooltipSupport}
                condition={tooltipSupport}
                depend={showTooltipSupport}>
                Спасибо за поддержку
            </Tooltip>
            :
            <></>
            }
        </div>
    );
};

export default Support;