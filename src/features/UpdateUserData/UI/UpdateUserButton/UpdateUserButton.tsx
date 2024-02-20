import React, { useEffect, useState } from 'react';
import style from './UpdateUserButton.module.css';
import Modal from 'shared/UI/Modal/Modal';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';
import UpdateUserModal from 'features/UpdateUserData/UI/UpdateUserModal/UpdateUserModal';
import { useDispatch } from 'react-redux';
import { userDataActions } from 'features/UpdateUserData/model/slice/userDataSlice';

export const UpdateUserButton = () => {

    const dispatch = useDispatch();
    const [modalUpdate, setModalUpdate] = useState(false);

    useEffect(() => () => { dispatch(userDataActions.resetIsValidPassword()); }, []);

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
