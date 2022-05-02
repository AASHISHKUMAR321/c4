import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { logedIn } from "../Redux/actions";
import { store } from "../Redux/store";

export const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [login, setlogin] = useState("");
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  console.log(store);

  const inputHandler = (e) => {
    const { className, value } = e.target;
    // console.log(className, value);
    setUser({ ...user, [className]: value });
  };
  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={inputHandler}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={inputHandler}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button
        className="submit"
        onClick={() => {
          axios.get(`http://localhost:8080/users`).then(({ data }) =>
            data.map((e) => {
              if (e.username == user.username && e.pass == user.password) {
                dispatch(logedIn(true));
                setlogin(e.role);
                // dispatch(setUser(e));
              }
            })
          );
        }}
      >
        Login
      </button>

      {login != "" ? (
        login == "admin" ? (
          <Navigate to={"/orders"} />
        ) : (
          <Navigate to={"/neworder"} />
        )
      ) : (
        ""
      )}
    </div>
  );
};
