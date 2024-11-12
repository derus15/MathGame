import { useEffect, useRef } from 'react';

export const useFlexHover = () => {

    const flexHoverRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        
        if (!flexHoverRef.current) {
            return;
        }
        
        const title = flexHoverRef.current;

        const handleMouseMove = (event: MouseEvent) => {

            const { offsetX, offsetY, target } = event;
            const { offsetWidth, offsetHeight } = target as HTMLElement;

            const rotateX = ((offsetY / offsetHeight) - 0.5) * -30;
            const rotateY = ((offsetX / offsetWidth) - 0.5) * 30;

            title.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };

        const handleMouseLeave = () => {
            title.style.transform = 'perspective(500px) rotateX(0) rotateY(0)';
        };

        title.addEventListener('mousemove', handleMouseMove);
        title.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            title.removeEventListener('mousemove', handleMouseMove);
            title.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [flexHoverRef]);

    return { flexHoverRef };
    
};
