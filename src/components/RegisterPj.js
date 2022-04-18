import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Fetch_User, SetUser } from "../redux/Actions/StudentLoginAction";

import "./RegisterForm.css";

export default function RegisterPj() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  let navigate = useNavigate();
  const users = useSelector((state) => state.Users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Fetch_User());
  }, []);

  const User = {
    user: user,
    email: email,
    password: pass,
    admin: false,
  };
  const Upload = (e) => {
    e.preventDefault()
    
    if (user === "" || email === "" || pass === "") {
      alert("fill the field");
    } else {
      const exisitingMail = users.find((ele) => ele.email === User.email);

      if (exisitingMail) {
        alert("Email Already Exist");
      } else {
     
        dispatch(SetUser(User));
        navigate("/Login");  
      }
    }
  };
  const goto = () => {
    navigate("/Login");
  };
  return (
    <section className="Register-frame">
      <div className="backgrd">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="rg-form">
        <h3>Register Here</h3>

        <label className="lb" htmlFor="username">
          Username
        </label>
        <input
          className="it"
          type="text"
          placeholder="userName"
          id="username"
          className="form-control form-control-lg border border-dark-75"
          onChange={(e) => setUser(e.target.value)}
        />

        <label className="lb" htmlFor="username">
          Email
        </label>
        <input
          className="it"
          type="text"
          placeholder="Email"
          id="username"
          required
          className="form-control form-control-lg border border-dark-75"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="lb" htmlFor="password">
          Password
        </label>
        <input
          className="it"
          type="password"
          placeholder="Password"
          id="password"
          className="form-control form-control-lg border border-dark-75"
          onChange={(e) => setPass(e.target.value)}
        />

        <button className="rg-btn gradient-custom-4 text-body" onClick={Upload}>
          Register
        </button>

        <p className="text-center text-muted mt-5 mb-0">
          <span
            onClick={goto}
            className="text-primary"
            style={{ cursor: "pointer" }}
          >
            Already Have An Account?{" "}
          </span>
          <Link to="#!" className="fw-bold text-body">
            <u>Login here</u>
          </Link>
        </p>
      </form>
    </section>
  );
}
