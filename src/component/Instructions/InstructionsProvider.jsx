import React, { useEffect, useState } from 'react';
import Instructions from './Instructions';

const InstructionsProvider = () => {

    const [isOpen, setIsOpen] = useState(null);

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
            {isOpen && <Instructions setIsOpen={setIsOpen} />}
        </div>
    );
};

export default InstructionsProvider;
