// Components
import { ThemeSwitcher } from "components/ThemeSwitcher";

// Styles
import s from "./Header.module.scss";

export const Header = () => (
  <div className={s.header}>
    <div className={s.logo}>devFinder</div>
    <ThemeSwitcher />
  </div>
);
