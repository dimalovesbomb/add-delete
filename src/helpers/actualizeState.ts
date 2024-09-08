export const actualizeState = <T>(state: T[]) => {
    return state.map((card, i) => {
        if (i === 0) return card;
        if (i === state.length - 1) return { ...card, position: 'last' };
        return { ...card, position: 'middle' };
    });
};
