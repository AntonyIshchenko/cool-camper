export const selectIsLoading = state => state.catalog.isLoading;
export const selectError = state => state.catalog.error;
export const selectItems = state => state.catalog.items;
export const selectSelected = state => state.catalog.selected;
export const selectIsLastPage = state => state.catalog.isLastPage;

export const selectItem = state => state.catalog.items();
