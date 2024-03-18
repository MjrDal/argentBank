import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../features/user/userSlice";
import { FetchPutData } from "../../../services/db-services";
import "../../../styles/style.css";

export const PrivateHome = () => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();
  const user = useSelector((state) => state.user.value);
  const token = useSelector((state) => state.token.value);
  const dispatch = useDispatch();
  const toggleForm = () => {
    setShowForm(true);
  };
  const cancel = () => {
    setShowForm(false);
    setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      userName: form.current[0].value,
    };
    if (postData.userName === user.userName) {
      setError(true);
      return;
    } else {
      FetchPutData(
        "http://localhost:3001/api/v1/user/profile",
        postData,
        token
      ).then((user) => {
        dispatch(setUser(user.body));
      });
      cancel();
    }
  };

  return (
    <main className="main bg-dark">
      {!showForm ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName}!
          </h1>
          <button onClick={toggleForm} className="edit-button">
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Edit user info</h1>
          <form ref={form} onSubmit={handleSubmit}>
            <label htmlFor="userName">User name</label>
            <input
              type="text"
              name="userName"
              id="userName"
              defaultValue={user.userName}
            />
            <label htmlFor="fName">First name</label>
            <input
              type="text"
              name="fName"
              id="fName"
              defaultValue={user.firstName}
              disabled
            />
            <label htmlFor="lName">Last name</label>
            <input
              type="text"
              name="lName"
              id="lName"
              defaultValue={user.lastName}
              disabled
            />
            <div>
              <button type="submit" className="edit-button">
                Save
              </button>
              <button className="edit-button" onClick={cancel}>
                Cancel
              </button>
            </div>
          </form>
          {error ? (
            <p className="errorMessage">
              Vous n&apos;avez pas changer le nom d&apos;utilisateur
            </p>
          ) : null}
        </div>
      )}
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};
