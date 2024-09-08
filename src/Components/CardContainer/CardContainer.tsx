import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { Card } from '../Card';
import { removeCard } from '../../store/cardsReducer';
import { MAX_BLOCKS } from '../../constants';
import classes from './CardContainer.styles.css';

export const CardContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const { cards } = useAppSelector((state) => state.cards);

    const [screenWidth, setScreenWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            setScreenWidth(containerRef.current.offsetWidth);
        }
    }, [containerRef]);

    const calculateXPos = (index: number) => {
        if (index === 0) return 0;
        return (screenWidth / MAX_BLOCKS) * index;
    };

    return (
        <div ref={containerRef} className={classes.cardContainer}>
            {cards.map((card, i) => (
                <Card
                    key={card.color}
                    xPos={calculateXPos(i)}
                    color={card.color}
                    position={card.position}
                    willBeDeleted={card.willBeDeleted}
                    onRemoveAnimationEnd={() => dispatch(removeCard())}
                />
            ))}
        </div>
    );
};
