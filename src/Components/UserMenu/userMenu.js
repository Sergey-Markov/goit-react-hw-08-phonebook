import s from "../UserMenu/userMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import defaultAvatar from "./default-avatar.jpg";
import { authSelectors, authOperations } from "../../redux/auth";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.default.getUserEmail);
  return (
    <div className={s.list}>
      <img src={defaultAvatar} alt="" width="32" className={s.avatar} />
      <p>{name}, wellcome!</p>
      <button
        type="button"
        className={s.button}
        onClick={() => dispatch(authOperations.default.logOut())}
      >
        Logout
      </button>
    </div>
  );
}
