import React, { useEffect, useState } from 'react';
import Instructions from './Instructions';
import { useSelector } from 'react-redux';

const InstructionsProvider = () => {

    const one = useSelector((state) => state.interface.modifications);
    const [isOpen, setIsOpen] = useState(null);
    const [key, setKey] = useState('initial');

    const instructionsObj = {
        'initial': 'Для начала сессии нажмите на поле ввода или Space',
        'one': 'Режим одной ошибки: в случае ошибки сессия закончится',
    };
    const [instruction, setInstruction] = useState(instructionsObj[key]);

    useEffect(() => {
        setKey('one');
        setInstruction(instructionsObj[key]);
        if (one) {
            setIsOpen(true);
        }
    }, [one]);

    useEffect(() => {
        const isInstruction = JSON.parse(localStorage.getItem('isInstruction'));
        if (isInstruction !== null) {
            setIsOpen(isInstruction);
        } else {
            setIsOpen(true);
        }
    }, []);

    return (
        <div>
            {isOpen && <Instructions setIsOpen={setIsOpen} instructions={instruction} />}
        </div>
    );
};

export default InstructionsProvider;
