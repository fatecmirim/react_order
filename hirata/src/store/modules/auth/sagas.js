import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';
import {
  loginSuccess,
  loginFailure,
  createUserSuccess,
  createUserFailure,
} from './actions';

export function* login({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, '/api/login', {
      email,
      password,
    });
    const { token, id, admin } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(loginSuccess(token, id, admin));
    history.push('/main');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(loginFailure());
  }
}
export function* createUser({ payload }) {
  try {
    const { name, email, password, phone } = payload.data;

    yield call(api.post, '/api/customers', {
      name,
      email,
      password,
      phone,
    });
    yield put(createUserSuccess());
    toast.success('Cliente cadastrado com sucesso');
    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique os dados !');
    yield put(createUserFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
export function signOut() {
  history.push('/');
}
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/LOGIN_REQUEST', login),
  takeLatest('@auth/CREATE_USER_REQUEST', createUser),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
