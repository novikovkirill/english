export const wordsLoadingSelector = (state) => state.words.loading;
export const wordsLoadedSelector = (state) => state.words.loaded;

export const journalLoadingSelector = (state) => state.timer.loading;
export const journalLoadedSelector = (state) => state.timer.loaded;
export const journalSelector = (state) => state.timer.journal;