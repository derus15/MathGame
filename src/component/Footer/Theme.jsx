import React, {useState} from 'react';
import Tooltip from "../../UI/Tooltip/Tooltip";

const Theme = () => {

    const [tooltipTheme, setTooltipTheme] = useState(false);
    const style = {
        bottom: '45px',
        left: '1070px',
        backgroundColor: 'white'
    }

    function showTheme(){
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
                Ведутся технические работы
            </Tooltip>
            :
                <></>
            }
        </div>
    );
};

export default Theme;