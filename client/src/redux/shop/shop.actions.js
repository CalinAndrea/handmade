import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsError = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

// export const fetchCollectionsStartAsynch = () => {
//   return (dispatch) => {
//     const collectionRef = firestore.collection("collections");

//     dispatch(fetchCollectionsStart());

//     collectionRef
//       .get()
//       .then((snapshot) => {
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         dispatch(fetchCollectionsSuccess(collectionsMap));
//       })
//       .catch((error) => dispatch(fetchCollectionsError(error.message)));
//   };
// };

export const sendOrderStart = (orderProperties) => ({
  type: ShopActionTypes.SEND_ORDER_START,
  payload: orderProperties,
});

export const sendOrderSuccess = (orderProperties) => ({
  type: ShopActionTypes.SEND_ORDER_SUCCESS,
  payload: orderProperties,
});

export const sendOrderFailure = (errorMessage) => ({
  type: ShopActionTypes.SEND_ORDER_FAILURE,
  payload: errorMessage,
});
