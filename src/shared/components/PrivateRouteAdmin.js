import { Route, Redirect } from "react-router-dom";

const PrivateRouteAdmin = ({ isAdmin, children, ...rest }) => {
  console.log(isAdmin);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAdmin ? (
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

export default PrivateRouteAdmin;
