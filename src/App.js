import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthProvider } from "./firebase/Auth";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Router>
    </AuthProvider>
  );
};

export default App;
