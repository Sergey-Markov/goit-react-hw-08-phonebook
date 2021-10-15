import { useCallback } from "react";
import { Login } from "../../login/Login";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import Form from "../Form/Form";
import s from "../PhonebookBar/PhonebookBar.module.css";

export default function Homepage() {
  const logout = useCallback(() => {
    console.log(`Logout clicked`);
  }, []);
  return (
    <div>
      <h1>Hello it's your Phonebook!!!</h1>
      <h2>Enter your login and password</h2>
      <Login />
      <div className={s.PhonebookBar}>
        <button type="button" onClick={logout} className={s.button}>
          Logout
        </button>
        <h1 className={s.title}>Phonebook</h1>
        <Form />
        <h2 className={s.title}>Contacts:</h2>
        <Filter />
        <Contacts />
      </div>
    </div>
  );
}
