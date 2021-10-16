import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";
import Homepage from "../Homepage/Homepage";
import s from "./WellcomePage.module.css";
export default function WellcomePage() {
  const isLogin = useSelector(authSelectors.getIsLoggedIn);
  if (isLogin) return <Homepage />;

  return (
    <div className={s.wellcomePage}>
      <h1>Wellcome to Phonebook.</h1>
      <p>
        Please try
        <NavLink to="/login" className={s.link}>
          Login
        </NavLink>
      </p>
    </div>
  );
}
