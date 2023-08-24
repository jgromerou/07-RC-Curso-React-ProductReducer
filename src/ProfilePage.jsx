import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

export const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <h3>Datos de Usuario</h3>
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
