import s from "../PhonebookBar/PhonebookBar.module.css";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import Form from "../Form/Form";
import { Registration } from "../../login/Registration";
import Homepage from "../Homepage/Homepage";

function PhonebookBar() {
  return (
    // <Registration />
    <Homepage />
    // <div className={s.PhonebookBar}>
    //   <h1 className={s.title}>Phonebook</h1>
    //   <Form />
    //   <h2 className={s.title}>Contacts:</h2>
    //   <Filter />
    //   <Contacts />
    // </div>
  );
}

export default PhonebookBar;
