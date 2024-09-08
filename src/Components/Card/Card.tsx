import { useEffect, useState } from 'react';
import classes from './Card.styles.css';

interface CardProps {
    color: string;
    xPos: number;
    position: 'first' | 'middle' | 'last';
    willBeDeleted?: boolean;
    onRemoveAnimationEnd: () => void;
}

export const Card: React.FC<CardProps> = ({ color, xPos, position, willBeDeleted, onRemoveAnimationEnd }) => {
    const [animateClass, setAnimateClass] = useState(() => {
        if (position === 'first') return classes.cardEnter;
        if (position === 'last') return classes.cardExit;

        return '';
    });

    useEffect(() => {
        if (position === 'first') {
            const enterTimeout = setTimeout(() => {
                setAnimateClass(classes.cardEnterActive);
            }, 10);

            return () => clearTimeout(enterTimeout);
        }

        if (willBeDeleted) {
            setAnimateClass(classes.cardExitActive);
            const exitTimeout = setTimeout(() => {
                onRemoveAnimationEnd();
            }, 100);

            return () => clearTimeout(exitTimeout);
        }
    }, [position, willBeDeleted]);

    return (
        <div
            className={`${classes.card} ${animateClass}`}
            style={{
                backgroundColor: color,
                transform: position !== 'first' && !willBeDeleted ? `translateX(${xPos}px)` : undefined,
            }}
        />
    );
};
