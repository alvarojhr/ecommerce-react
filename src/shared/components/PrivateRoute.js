import { Route, Redirect } from "react-router-dom";
import { useJwt } from "react-jwt";

const PrivateRoute = ({ children, ...rest }) => {
  let auth = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
