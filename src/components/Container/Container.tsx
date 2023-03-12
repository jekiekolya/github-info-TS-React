import { ReactNode } from "react";

// Styles
import s from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <div className={s.container}>{children}</div>
);
