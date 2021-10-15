// import s from "../src/App.css";
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
// import { Homepage } from "./Components/Homepage/Homepage";
import { Login } from "./login/Login";
import { Registration } from "./login/Registration";
import PhonebookBar from "././Components/PhonebookBar/PhonebookBar";
// import Navigation from "./Components/Navigation/Navigation";
// import PhonebookBar from "./Components/PhonebookBar/PhonebookBar";

// const PhonebookBar = lazy(() =>
//   import(
//     "./Components/PhonebookBar/PhonebookBar" /*webpackChunkName: "PhonebookBar" */
//   )
// );
// const Registration = lazy(() =>
//   import("./login/Registration" /*webpackChunkName: "Registration" */)
// );

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
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
