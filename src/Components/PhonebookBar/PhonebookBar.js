import s from "../PhonebookBar/PhonebookBar.module.css";
import UserMenu from "../UserMenu/userMenu";
import Navigation from "../Navigation/Navigation";

function PhonebookBar() {
  return (
    <div className={s.phonebookBar}>
      <Navigation />
      <UserMenu />
    </div>
  );
}

export default PhonebookBar;
