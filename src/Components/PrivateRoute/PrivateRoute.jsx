import React from "react";
import{Route, Redirect} from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import { useSelector } from "react-redux";
const PrivateRoute = ({
    redirectTo,
    children,
    ...routeProps
}) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect to='/ ' />}
        </Route>
    );
}

export default PrivateRoute;