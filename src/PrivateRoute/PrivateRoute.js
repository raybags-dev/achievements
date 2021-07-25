import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../firebase/Auth";

const PrivateRoute = ({ components: pages, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? <pages {...routeProps} /> : <Redirect to={"/login"} />
      }
    />
  );
};

export default PrivateRoute;
