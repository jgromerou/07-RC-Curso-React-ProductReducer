import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.auth.loginType:
      return {
        ...state,
        isLogged: true,
        name: action.payload,
      };
    default:
      return state;
  }
};
