export interface Card {
    color: string;
    position: 'last' | 'first' | 'middle';
    willBeDeleted?: boolean;
}
