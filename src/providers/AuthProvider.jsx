import { useReducer } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { authReducer } from '../reducers/authReducer';
import { types } from '../types/types';

const initialState = {
  isLogged: false,
  name: null,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = () => {
    //apirest
    dispatch({
      type: types.auth.loginType,
      payload: 'Fabian Romero',
    });
  };

  return (
    <AuthContext.Provider value={{ state, login }}>
      {children}
    </AuthContext.Provider>
  );
};
