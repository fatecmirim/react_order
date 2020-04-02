import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import cart from './cart/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  return yield all([auth, cart, user]);
}
