import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import logo from "./assets/logo.png";
// import {auth} from "./firgit initebase";

function Login() {
  const login = (e) => {
    e.preventDefault();
    // auth.signInWithEmailAndPassword(email, password)

  };
  const register = (e) => {
    e.preventDefault();

  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign in </h1>
        <form action="">
          <h5>Email</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <button type="submit" onClick={login} className="login__signinButton">
            Sign in
          </button>
        </form>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sequi
          natus, sapiente totam voluptate omnis odio magni debitis illo
          mollitia. Obcaecati, necessitatibus laborum enim non incidunt corrupti
          earum fuga doloribus.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
