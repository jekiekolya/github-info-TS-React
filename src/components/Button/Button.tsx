// Styles
import s from "./Button.module.scss";

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ text, onClick }: ButtonProps) => (
  <button className={s.button} onClick={onClick}>
    {text}
  </button>
);
