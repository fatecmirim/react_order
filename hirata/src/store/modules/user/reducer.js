import produce from 'immer';
const INITIAL_STATE = {
  customerId: null,
  admin: false,
};
export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/LOGIN_SUCCESS': {
        draft.customerId = action.payload.id;
        draft.admin = action.payload.admin;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.customerId = null;
        draft.admin = false;
        break;
      }
      default: 
    }
  });
}
