import React, { useCallback } from "react";
import { withRouter } from "react-router";

import { projectAuth } from "../firebase/config";

const Signup = ({ history }) => {
  // handle signup
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();

      const { email, password } = event.target.elements;

      try {
        await projectAuth.createUserWithEmailAndPassword(
          email.value,
          password.value
        );

        history.push("/login");
      } catch (ex) {
        alert(ex.message);
      }
    },
    [history]
  );

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="login-title">Regester</h1>
        <form className="login-form" onSubmit={handleSignUp}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              required={true}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              required={true}
            />
          </div>
          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Signup);
