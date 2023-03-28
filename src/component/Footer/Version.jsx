import React, {useState} from 'react';
import MyModal from "../../UI/Modal/MyModal";

const Version = () => {

    const [modalVersion, setModalVersion] = useState(false);

    function showModalVersion() {
        setModalVersion(true);
    }

    return (
        <div>
            <div className={'extra'} onClick={showModalVersion}>v 1.0</div>
            {(modalVersion)
            ?
            <MyModal
                visible={modalVersion} setVisible={setModalVersion}>
                <span style={{color:'white', fontSize:'20px'}}>v 1.0 </span>
                Первая рабочая версия приложения
            </MyModal>
            :
            <></>}
        </div>
    );
};

export default Version;