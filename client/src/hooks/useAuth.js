import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  console.log(auth);
  return auth;
};

export default useAuth;
