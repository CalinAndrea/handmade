import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap,
  addCollectionAndDocuments,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsError,
  sendOrderFailure,
  sendOrderSuccess,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsError(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* sendOrderStartAsynch(orderProperties) {
  try {
    const { payload } = orderProperties;
    const response = yield call(addCollectionAndDocuments, "orders", [payload]);
    yield put(sendOrderSuccess(response));
  } catch (error) {
    yield put(sendOrderFailure(error.message));
  }
}

export function* sendOrderStart() {
  yield takeLatest(ShopActionTypes.SEND_ORDER_START, sendOrderStartAsynch);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart), call(sendOrderStart)]);
}
