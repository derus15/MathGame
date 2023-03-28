import React, {useState} from 'react';
import Tooltip from "../../UI/Tooltip/Tooltip";

const Theme = () => {

    const [tooltipTheme, setTooltipTheme] = useState(false);

    const style = {
        bottom: '200%',
        left: '64%',
        position:'absolute',
    }

    function showTheme() {
        setTooltipTheme(true);
    }

    return (
        <div>
            <div onClick={showTheme} className={'extra'}>Темная</div>
            {(tooltipTheme)
            ?
            <Tooltip
                style={style}
                setShow={setTooltipTheme}
                condition={tooltipTheme}
                depend={showTheme}>
                Пока доступна одна тема
            </Tooltip>
            :
                <></>
            }
        </div>
    );
};

export default Theme;