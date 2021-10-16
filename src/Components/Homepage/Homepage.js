// import { useCallback } from "react";
import { useSelector } from "react-redux";
// import { Login } from "../../login/Login";
import { authSelectors } from "../../redux/auth";
import LoggedInInterface from "../LoggedInInterface/LoggedInIntrface";

// import s from "../Homepage/Homepage.module.css";

export default function Homepage() {
  const isLoggedIn = useSelector(authSelectors.default.getIsLoggedIn);
  return <div>{isLoggedIn && <LoggedInInterface />}</div>;
}
