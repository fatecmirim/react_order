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
export function createUserRequest(name, email, password, type, cpf) {
  return {
    type: '@auth/CREATE_USER_REQUEST',
    payload: { name, email, password, type, cpf },
  };
}
export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
