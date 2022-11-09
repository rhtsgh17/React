import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authMe } from "../redux/action/authAction";
import { syncToken } from "../api/baseUrl2";

export default function ProtectedRoute({ children }) {
  const auth = Cookies.get("myapps_token");
  const isAuth = useSelector((state) => state?.authProses?.isAuth);

  console.log("auth", isAuth);
  let [proses, setProses] = React.useState(true);
  let dispatch = useDispatch();
  const onLoaded = async (values) => {
    let result = await dispatch(authMe(values));
    syncToken();
    setProses(false);

    console.log("res", result);
  };

  React.useEffect(() => {
    if (!isAuth) {
      if (auth !== undefined) {
        onLoaded();
      } else {
        setProses(false);
      }
    } else {
      syncToken();
      setProses(false);
    }
  }, []);

  if (proses) {
    return <div>Mohon Bersabar</div>;
  } else {
    console.log("auth", auth);
    return auth !== undefined ? children : <Navigate to="/login" />;
  }
}
