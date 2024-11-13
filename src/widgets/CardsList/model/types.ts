interface CardInfo {
    id: number,
    level: number,
    isUnlocked: boolean,
}

export interface CardsListSchema {
    cards: CardInfo[]
}
