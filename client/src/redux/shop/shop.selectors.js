import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectOrderErrorMessage = createSelector(
  [selectShop],
  (shop) => shop.errorMessage
);

export const selectIsOrderSent = createSelector(
  [selectShop],
  (shop) => shop.orderSent
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);

export const selectItem = (collectionUrlParam) =>
  createSelector([selectCollection], (collection) =>
    Object.keys(collection.items).map((item) => item.id === collectionUrlParam)
  );
