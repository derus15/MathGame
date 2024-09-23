import React, { useRef, useCallback } from 'react';

const generateRandomValue = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);

const createParticleStyle = (): React.CSSProperties => {

    const hue = 0;
    const saturation = generateRandomValue(70, 100);
    const lightness = generateRandomValue(30, 70);

    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    const size = generateRandomValue(4, 9);

    return {
        position: 'absolute',
        top: '28%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        opacity: 1,
        boxShadow: `0 0 ${generateRandomValue(10, 20)}px ${color}`,
        background: color,
        width: `${size}px`,
        height: `${size}px`,
    };
};

export const useParticles = () => {

    const particleContainerRef = useRef<HTMLDivElement | null>(null);

    const createParticle = useCallback((x: number, y: number) => {

        const particle = document.createElement('div');
        Object.assign(particle.style, createParticleStyle());

        const destinationX = (Math.random() - 0.5) * 300; // разлет
        const destinationY = (Math.random() - 0.5) * 300; // разлет
        const rotation = Math.random() * 520;
        const delay = Math.random() * 200;

        particle.animate([
            { opacity: 1 },
            {
                transform: `translate(-50%, -50%) translate(${x + destinationX}px,
                 ${y + destinationY}px) rotate(${rotation}deg)`,
                opacity: 0,
            },
        ], {
            duration: Math.random() * 1000 + 5000,
            easing: 'cubic-bezier(0, .9, .57, 1)',
            // delay,
        }).onfinish = () => particle.remove();

        particleContainerRef.current.appendChild(particle);
    }, []);

    const particleExplosion = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {

        const amount = 60;
        const bbox = e.currentTarget.getBoundingClientRect();
        const x = bbox.width / 2;
        const y = bbox.height / 2;

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < amount; i++) {
            createParticle(x, y);
        }
    }, [createParticle]);

    return { particleContainerRef, particleExplosion };
};
