// import s from "../src/App.css";
import { lazy, Suspense, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import { Registration } from "./login/Registration";
import PhonebookBar from "././Components/PhonebookBar/PhonebookBar";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PublicRoute from "./Components/PublicRoute/PublicRoute";
import { Login } from "./login/Login";
import WellcomePage from "./Components/WellcomePage/WellcomePage";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "./redux/auth/auth-selectors";
import authOperations from "./redux/auth/auth-operations";

const NotFoundView = lazy(() =>
  import(
    "./Components/NotFoundView/NotFoundView" /*webpackChunkName: "NotFoundView" */
  )
);

function App() {
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFetchingCurrentUser && (
      <div>
        <PhonebookBar />
        <Suspense fallback={<h1>LOADING...</h1>}>
          <Switch>
            <PublicRoute component={WellcomePage} exact path="/" />
            <PublicRoute
              component={Login}
              exact
              path="/login"
              restricted
              redirectTo="/contacts"
            />
            <PublicRoute
              component={Registration}
              exact
              path="/registration"
              restricted
              redirectTo="/contacts"
            />
            <PrivateRoute
              component={Homepage}
              exact
              path="/contacts"
              redirectTo="/login"
            />
            <Route>
              <NotFoundView />
            </Route>
          </Switch>
        </Suspense>
      </div>
    )
  );
}

export default App;
