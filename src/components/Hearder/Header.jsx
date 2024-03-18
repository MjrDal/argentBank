import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/argentBankLogo.png";
import { resetToken } from "../../features/login/loginSlice";
import { resetUser } from "../../features/user/userSlice";
import "../../styles/style.css";

export const Header = () => {
  const token = useSelector((state) => state.token.value);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetToken());
    dispatch(resetUser());
    sessionStorage.removeItem("token");
  };

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to={"/"}>
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {!token ? (
            <Link className="main-nav-item" to={"/login"}>
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          ) : (
            <div>
              {token ? (
                <i className="fa fa-user-circle">{user.userName}</i>
              ) : null}

              <Link className="main-nav-item" to={"/"} onClick={handleClick}>
                <i className="fa fa-sign-out">Sign Out</i>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
