import React, { useState } from 'react';
import Modal from '../../UI/Modal/Modal';

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
                    <Modal
                        setVisible={setModalBase}
                        visible={modalBase}
                    >
                        Здесь будут публиковаться приемы и принципы быстрого счета
                    </Modal>
                )}
        </div>
    );
};

export default Base;
