import FilterContacts from "../FilterContacts/FilterContacts";
import Form from "../Form/Form";
import Contacts from "../Contacts/Contacts";
import s from "./LoggedInInterface.module.css";

function LoggedInInterface() {
  return (
    <div className={s.loggedInInterfase}>
      <h1 className={s.title}>Phonebook</h1>
      <Form />
      <h2 className={s.title}>Contacts:</h2>
      <FilterContacts />
      <Contacts />
    </div>
  );
}

export default LoggedInInterface;
