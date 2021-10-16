// import s from "../src/App.css";
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import { Registration } from "./login/Registration";
import PhonebookBar from "././Components/PhonebookBar/PhonebookBar";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { Contacts } from "@mui/icons-material";
import PublicRoute from "./Components/PublicRoute/PublicRoute";

const NotFoundView = lazy(() =>
  import(
    "./Components/NotFoundView/NotFoundView" /*webpackChunkName: "NotFoundView" */
  )
);

function App() {
  return (
    <div>
      <PhonebookBar />
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Switch>
          <PublicRoute component={Homepage} exact path="/" />
          <PublicRoute
            component={Registration}
            exact
            path="/registration"
            restricted
            redirectTo="/"
          />
          <PrivateRoute component={Contacts} exact path="/contacts" />
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
