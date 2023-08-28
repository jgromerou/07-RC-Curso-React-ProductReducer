import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';

export const ProfilePage = () => {
  const { state } = useContext(AuthContext);
  return (
    <>
      <h3>Datos de Usuario</h3>
      <pre>{JSON.stringify(state, null, 3)}</pre>
    </>
  );
};
