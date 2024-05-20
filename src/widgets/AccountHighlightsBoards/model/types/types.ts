export interface HighlightsBoard {
    title: string,
    eps: string,
    additionalParameter: string,
}

export interface HighlightBoardSchema {
    timeBoard: HighlightsBoard[],
    numberBoard: HighlightsBoard[],
}
