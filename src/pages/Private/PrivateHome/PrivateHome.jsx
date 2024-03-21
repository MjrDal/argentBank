import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeaturesAccount from "../../../components/Features/FeaturesAccount";
import { setUser } from "../../../features/user/userSlice";
import { FetchPutData } from "../../../services/db-services";
import "../../../styles/style.css";

export const PrivateHome = () => {
  const data = [
    {
      title: "Argent Bank Checking (x8349)",
      money: "$2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712))",
      money: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      money: "$184.30",
      description: "Available Balance",
    },
  ];

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
      <FeaturesAccount
        title={data[0].title}
        money={data[0].money}
        description={data[0].description}
      />
      <FeaturesAccount
        title={data[1].title}
        money={data[1].money}
        description={data[1].description}
      />
      <FeaturesAccount
        title={data[2].title}
        money={data[2].money}
        description={data[2].description}
      />
    </main>
  );
};
