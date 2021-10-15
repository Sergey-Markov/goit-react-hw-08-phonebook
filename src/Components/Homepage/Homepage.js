// import { useCallback } from "react";
import { Login } from "../../login/Login";
// import Contacts from "../Contacts/Contacts";
// import Filter from "../Filter/Filter";
// import Form from "../Form/Form";
import s from "../Homepage/Homepage.module.css";

export default function Homepage() {
  // const logout = useCallback(() => {
  //   console.log(`Logout clicked`);
  // }, []);
  return (
    <div className={s.list}>
      <h2 className={s.title}>Enter your login and password</h2>
      <Login />
    </div>
  );
}
