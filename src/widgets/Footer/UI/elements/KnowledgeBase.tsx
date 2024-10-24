import React, { useState } from 'react';
import Modal from 'shared/UI/Modal/Modal';
import style from '../Footer.module.css';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';

const KnowledgeBase = () => {
    const [modalBase, setModalBase] = useState(false);

    function showModalBase() {
        setModalBase(true);
    }

    return (
        <>
            <OutlineButton onClick={showModalBase} className={style.element}>База знаний</OutlineButton>
            <Modal
                setVisible={setModalBase}
                visible={modalBase}
            >
                Здесь будут публиковаться приемы и принципы быстрого счета
            </Modal>
        </>
    );
};

export default KnowledgeBase;
