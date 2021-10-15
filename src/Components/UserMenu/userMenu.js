import s from "../UserMenu/userMenu.module.css";

export default function UserMenu() {
  return (
    <div className={s.list}>
      <p>UserName, wellcome!</p>
      <button type="button" className={s.button}>
        Logout
      </button>
    </div>
  );
}
