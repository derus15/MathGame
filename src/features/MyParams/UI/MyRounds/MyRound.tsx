import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './MyRound.module.css';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';
import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/UI/Modal/Modal';
import PersonParamsInput from 'shared/UI/Input/PersonParamsInput/PersonParamsInput';
import { getSessionProgress } from 'entities/Session';
import { testNumber } from 'shared/lib/testNumber/testNumber';
import { exampleActions } from 'entities/Example';
import { getParamsRounds, sessionParamsActions } from 'entities/SessionParams';

interface MyRoundProps {
    standardRound: number[];
}

export const MyRound = memo(({ standardRound }: MyRoundProps) => {
    
    const dispatch = useDispatch();
    const [isModal, setIsModal] = useState(false);
    const rounds = useSelector(getParamsRounds);
    const isActive = !standardRound.includes(rounds);
    const sessionProgress = useSelector(getSessionProgress);

    const showModalMyTime = () => {
        if (!sessionProgress) {
            setIsModal(true);
        }
    };

    function changeRoundInSession(e: React.ChangeEvent<HTMLInputElement>) {

        const { value } = e.target;
        const isNumber = testNumber(value);

        if (isNumber) {
            dispatch(sessionParamsActions.changeRounds((value === '0') ? 3 : value));
            dispatch(exampleActions.generateSeed());
        }
    }

    return (
        <>
            <OutlineButton
                className={classNames(style.round, { [style.roundActive]: isActive })}
                onClick={showModalMyTime}
            >
                <span>
                    __
                </span>
            </OutlineButton>
            <Modal visible={isModal} setVisible={setIsModal}>
                Задайте свое количество раундов:
                <PersonParamsInput onInput={changeRoundInSession} />
            </Modal>
        </>
    );
});
