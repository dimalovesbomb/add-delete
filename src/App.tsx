import React from 'react';
import { useAppDispatch, useAppSelector } from './store';
import { addCard, prepareCardRemoval } from './store/cardsReducer';
import { Button } from './Components/Button';
import { CardContainer } from './Components/CardContainer';
import { MAX_BLOCKS } from './constants';
import './styles.css';

export default function App() {
    const dispatch = useAppDispatch();
    const { cards } = useAppSelector((state) => state.cards);

    return (
        <div>
            <Button variant="add" onClick={() => dispatch(addCard())} disabled={cards.length >= MAX_BLOCKS}>
                Add
            </Button>
            <Button variant="delete" onClick={() => dispatch(prepareCardRemoval())}>
                Delete
            </Button>
            <CardContainer />
        </div>
    );
}
