import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../features/login/loginSlice";
import { setUser } from "../../features/user/userSlice";
import { FetchPostData, FetchPostToken } from "../../services/db-services";
import "../../styles/style.css";

export const Login = () => {
  const form = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      email: form.current[0].value,
      password: form.current[1].value,
    };

    FetchPostData("http://localhost:3001/api/v1/user/login", postData).then(
      async (token) => {
        await dispatch(setToken(token.body.token));
        FetchPostToken(
          "http://localhost:3001/api/v1/user/profile",
          token.body.token
        ).then((user) => {
          dispatch(setUser(user.body));
        });

        sessionStorage.setItem("token", token.body.token);
        navigate("/private/private-home");
      }
    );
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};
