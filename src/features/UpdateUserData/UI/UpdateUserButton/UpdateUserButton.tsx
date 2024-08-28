import React, { useState } from 'react';
import style from './UpdateUserButton.module.css';
import Modal from 'shared/UI/Modal/Modal';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';
import { UpdateUserModal } from '../UpdateUserModal/UpdateUserModal';

export const UpdateUserButton = () => {

    const [modalUpdate, setModalUpdate] = useState(false);

    function showModalUpdate() {
        setModalUpdate(true);
    }
    
    return (
        <>
            <OutlineButton onClick={showModalUpdate} className={style.optionsContainer}>
                <div className={style.dot} />
                <div className={style.dot} />
                <div className={style.dot} />
            </OutlineButton>
            <Modal visible={modalUpdate} setVisible={setModalUpdate}>
                <UpdateUserModal />
            </Modal>
        </>

    );
};
