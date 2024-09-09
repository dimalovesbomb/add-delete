import { createSlice } from '@reduxjs/toolkit';
import { getRandomHexColor, actualizeState } from '../helpers';
import { Card } from '../types';

interface CardsState {
    cards: Card[];
}

const initialState: CardsState = {
    cards: [],
};

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state) => {
            state.cards = [{ color: getRandomHexColor(), position: 'first' }, ...state.cards];
            state.cards = actualizeState(state.cards);
        },
        prepareCardRemoval: (state) => {
            if (state.cards.length) {
                const lastCard = state.cards[state.cards.length - 1];
                state.cards[state.cards.length - 1] = { ...lastCard, willBeDeleted: true, position: 'last' };
            }
        },
        removeCard: (state) => {
            state.cards.pop();
            state.cards = actualizeState(state.cards);
        },
    },
});

export const { addCard, prepareCardRemoval, removeCard } = cardsSlice.actions;

export default cardsSlice.reducer;
