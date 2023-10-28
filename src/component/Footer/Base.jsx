import React, { useState } from 'react';
import MyModal from '../../UI/Modal/MyModal';

const Base = () => {
    const [modalBase, setModalBase] = useState(false);

    function showModalBase() {
        setModalBase(true);
    }

    return (
        <div>
            <div onClick={showModalBase} className="extra">База знаний</div>
            {modalBase
                && (
                    <MyModal
                        setVisible={setModalBase}
                        visible={modalBase}
                    >
                        Здесь будут публиковаться приемы и принципы быстрого счета
                    </MyModal>
                )}
        </div>
    );
};

export default Base;
