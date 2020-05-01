export function loginRequest(email, password) {
  return {
    type: '@auth/LOGIN_REQUEST',
    payload: { email, password },
  };
}
export function loginSuccess(token, id, admin) {
  return {
    type: '@auth/LOGIN_SUCCESS',
    payload: { token, id, admin },
  };
}
export function loginFailure() {
  return {
    type: '@auth/LOGIN_FAILURE',
  };
}
export function createUserRequest(data) {
  return {
    type: '@auth/CREATE_USER_REQUEST',
    payload: { data },
  };
}
export function createUserSuccess() {
  return {
    type: '@auth/CREATE_USER_SUCCESS',
  };
}
export function createUserFailure() {
  return {
    type: '@auth/CREATE_USER_FAILURE',
  };
}
export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
