import React, {useState} from 'react';
import MyModal from "../../UI/Modal/MyModal";

const Version = () => {

    const [modalVersion, setModalVersion] = useState(false);

    function showModalVersion() {
        setModalVersion(true);
    }

    return (
        <div>
            <div className={'extra'} onClick={showModalVersion}>v 1.1.1</div>
            {(modalVersion)
            ?
            <MyModal
                visible={modalVersion} setVisible={setModalVersion}>
                <span style={{fontSize:'25px'}}>v 1.0 </span>
                <p style={{color:'white'}} >- Первая рабочая версия приложения</p>
                <br/>
                <span style={{fontSize:'25px'}}>v 1.1 </span>
                <p style={{color:'white'}}>
                    - Добавлена новая тема <br/>
                    - Исправление мелких ошибок и багов
                </p>
            </MyModal>
            :
            <></>}
        </div>
    );
};

export default Version;