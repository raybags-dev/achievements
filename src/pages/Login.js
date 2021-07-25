import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../firebase/Auth";

import { projectAuth } from "../firebase/config";
import { motion } from "framer-motion";

const Login = ({ history, error }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();

      const { email, password } = event.target.elements;

      try {
        await projectAuth.signInWithEmailAndPassword(
          email.value,
          password.value
        );

        history.push("/");
      } catch (ex) {
        alert(ex.message);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="login-container">
      <motion.div
        className="login-wrapper"
        initial={{ top: "-100%" }}
        animate={{ top: "50%" }}
      >
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
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
            Sign In
          </button>
          <p className="login-error">{error}</p>
        </form>
      </motion.div>
    </div>
  );
};

export default withRouter(Login);
