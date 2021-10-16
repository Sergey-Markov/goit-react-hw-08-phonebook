import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.css";

export default function Navigation() {
  return (
    <ul className={s.list}>
      <NavLink to="/registration" className={s.item}>
        Registration
      </NavLink>
      <NavLink to="/" className={s.item}>
        Login
      </NavLink>
    </ul>
  );
}
