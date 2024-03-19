import React, { useState } from 'react';
import Modal from 'shared/UI/Modal/Modal';
import style from './ExampleModal.module.css';
import { useSelector } from 'react-redux';
import { ExampleButton } from 'shared/UI/Button/ExampleButton/ExampleButton';
import { getSessionExampleList } from 'entities/SessionData/model/selectors/getSessionExampleList';
import { getExample } from 'entities/Example';
import { getInterfaceGameMode } from 'widgets/Interface';

const ExampleModal = () => {

    const [modalExample, setModalExample] = useState(false);
    const lastExample = useSelector(getExample);
    const exampleList = useSelector(getSessionExampleList);
    const sprintMode = useSelector(getInterfaceGameMode) === 'Спринт';
    
    const showModalExample = () => {
        setModalExample(true);
    };

    return (
        <>
            <ExampleButton onClick={showModalExample}>Подробнее</ExampleButton>
            <Modal visible={modalExample} setVisible={setModalExample} className={style.exampleModal}>
                <div className={style.exampleContainer}>
                    {exampleList.map((example) => (<span key={Math.random()}>{example}</span>))}
                    {!sprintMode && <span>{lastExample} __</span>}
                    {!exampleList.length && sprintMode && <div>Нет Данных</div>}
                </div>
            </Modal>
        </>

    );
};

export default ExampleModal;
