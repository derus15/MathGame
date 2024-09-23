import React, { useState } from 'react';
import style from './SupportMe.module.css';
import Heart from '/public/assets/heart.svg';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';
import Modal from 'shared/UI/Modal/Modal';
import { toast } from 'react-toastify';
import { useParticles } from 'shared/UI/useParticles/useParticles';

export const SupportMe = () => {

    const [heartOpacity, setHeartOpacity] = useState(10);
    const [modalSupport, setModalSupport] = useState(false);
    const { particleContainerRef, particleExplosion } = useParticles();
    
    const showModalSupport = () => {
        setModalSupport(true);
    };

    const incrementOpacity = () => {
        setHeartOpacity((prevOpacity) => {
            const newOpacity = prevOpacity + 10;

            if (newOpacity === 100) {
                toast('❤️ Спасибо за поддержку');
            }
            
            if (newOpacity >= 200 && newOpacity % 100 === 0) {
                toast(`❤️ Спасибо за поддержку х${newOpacity / 100}`);
            }

            return newOpacity;
        });
    };
    
    return (
        <>
            <OutlineButton onClick={showModalSupport} className={style.supportButton}>
                Поддержать
            </OutlineButton>
            <Modal visible={modalSupport} setVisible={setModalSupport}>
                <div className={style.heartContainer} ref={particleContainerRef}>
                    <Heart
                        className={style.heart}
                        style={{ fill: `rgba(255, 0, 0, ${heartOpacity / 100})` }}
                        onClick={(e) => {
                            // @ts-ignore
                            particleExplosion(e);
                            incrementOpacity();
                        }}
                    />
                    <span className={style.heartTitle}>{heartOpacity}%</span>
                </div>
            </Modal>
        </>
    );
};
