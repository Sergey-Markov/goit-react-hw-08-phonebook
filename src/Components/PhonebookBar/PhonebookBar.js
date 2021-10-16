import s from "../PhonebookBar/PhonebookBar.module.css";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import { authSelectors } from "../../redux/auth";

function PhonebookBar() {
  const isLoggedIn = useSelector(authSelectors.default.getIsLoggedIn);
  return (
    <div className={s.phonebookBar}>
      {isLoggedIn ? <UserMenu /> : <Navigation />}
    </div>
  );
}

export default PhonebookBar;
