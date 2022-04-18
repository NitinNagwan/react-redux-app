import React, { useEffect, useState } from "react";
import "./LoginForm.css";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  IsLogedIn,
  Fetch_User,
  IsAdmin,
} from "../redux/Actions/StudentLoginAction";

export default function FormPj() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.Users);

  useEffect(() => {
    dispatch(Fetch_User());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = false;
    let admin = false;
    console.log(users);

    if (email === "" || pass === "") {
      alert("please enter the credentials");
    } else {
      const aUser = users.find((ele) => ele.email === email);

      if (!aUser) {
        alert("please Register first");
        navigate("/Register");
      } else {
        users.forEach((ele) => {
          if (ele.email === email && ele.password === pass && ele.admin) {
            dispatch(IsAdmin(aUser.user));
            admin = true;
          }

          if (ele.email === email && ele.password === pass && !ele.admin) {
            dispatch(IsLogedIn(aUser.user));
            flag = true;
          }
        });
        if (admin) {
          navigate("/Admin");
        } else if (flag) {
          navigate("/Quiz");
        } else {
          alert("Wrong Credentials");
        }
      }
    }
  };

  const goto = () => {
    navigate("/Register");
  };

  return (
    <section className="vh-100 Form-Frame">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 form">
            <form>
              <h3>Login Here</h3>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control  form-control-lg border border-dark-75 form-input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control  form-control-lg border border-dark-75 form-input"
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>

              <div className="form-check d-flex justify-content-start">
                <label
                  className="form-check-label "
                  htmlFor="form1Example3"
                  style={{ color: "black" }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                  />
                  Remember me{" "}
                </label>
              </div>

              <button className="signin_btn" onClick={handleSubmit}>
                Sign in
              </button>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <p className="text-center text-muted mt-5 mb-0">
                <span
                  onClick={goto}
                  className="text-primary fw-bolder ms-3"
                  style={{ cursor: "pointer" }}
                >
                  Not A User ?{" "}
                </span>
                <Link to="#!" className="text-body">
                  <u></u>
                </Link>
              </p>
            </form>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
