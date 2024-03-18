import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { setToken } from "../../features/login/loginSlice";
import { setUser } from "../../features/user/userSlice";
import { FetchPostToken } from "../../services/db-services";

export const Private = () => {
  const sessionToken = sessionStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (sessionToken) {
      FetchPostToken(
        "http://localhost:3001/api/v1/user/profile",
        sessionToken
      ).then((user) => {
        dispatch(setUser(user.body));
        dispatch(setToken(sessionToken));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!sessionToken) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};
