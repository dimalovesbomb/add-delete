import { PropsWithChildren } from 'react';
import classes from './Button.styles.css';

interface ButtonProps {
    variant: 'add' | 'delete';
    onClick: () => void;
    disabled?: boolean;
}
export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ variant, onClick, disabled, children }) => {
    return (
        <button onClick={onClick} className={`${classes.button} ${classes[variant]}`} disabled={disabled}>
            {children}
        </button>
    );
};
