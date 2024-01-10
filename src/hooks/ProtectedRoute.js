//custome hook mustStartWith use

import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { LoginUser } from "../components/LoginUser";

//user define hook...
const useAuth = () => {
  const [id, setid] = useState();
  useEffect(() => {
    setid(localStorage.getItem("id"));
  }, []);

  if (id != undefined) {
    return true;
  }

  return false;
};

//outlet is use for nested routing

const ProtectedRoute = () => {

    const auth = useAuth(); // true or false

    return auth == true ? <Outlet/> : <LoginUser/>
    

};
export default ProtectedRoute;
