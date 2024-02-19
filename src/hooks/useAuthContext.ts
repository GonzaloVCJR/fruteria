import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.tsx";

const useAuthContext = () => {
    return useContext(AuthContext);
}

export default useAuthContext;
