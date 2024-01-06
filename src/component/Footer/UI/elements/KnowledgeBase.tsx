import React, { useState } from 'react';
import Modal from '../../../../UI/Modal/Modal';
import style from '../Footer.module.css';
import { OutlineButton } from '../../../../UI/Button/OutlineButton/OutlineButton';

const KnowledgeBase = () => {
    const [modalBase, setModalBase] = useState(false);

    function showModalBase() {
        setModalBase(true);
    }

    return (
        <>
            <OutlineButton onClick={showModalBase} className={style.extra}>База знаний</OutlineButton>
            {modalBase
                && (
                    <Modal
                        setVisible={setModalBase}
                        visible={modalBase}
                    >
                        Здесь будут публиковаться приемы и принципы быстрого счета
                    </Modal>
                )}
        </>
    );
};

export default KnowledgeBase;
