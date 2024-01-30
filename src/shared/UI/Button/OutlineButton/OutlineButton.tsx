import style from './OutlineButton.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';

interface OutlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const OutlineButton:FC<OutlineButtonProps> = (props) => {

    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <button type="button" {...otherProps} className={classNames(style.outline, {}, [className])}>
            {children}
        </button>
    );
};
