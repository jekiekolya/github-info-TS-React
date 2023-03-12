// Styles
import s from "./UserStat.module.scss";

// Types
import { LocalGithubUser } from "types";

export interface UserStatProps
  extends Pick<LocalGithubUser, "repos" | "followers" | "following"> {}

export const UserStat = ({ followers, following, repos }: UserStatProps) => (
  <div className={s.userStat}>
    <div className={s.userInfo}>
      <div className={s.infoTitle}>Repos</div>
      <div className={s.infoNumber}>{repos}</div>
    </div>
    <div className={s.userInfo}>
      <div className={s.infoTitle}>Following</div>
      <div className={s.infoNumber}>{following}</div>
    </div>
    <div className={s.userInfo}>
      <div className={s.infoTitle}>Followers</div>
      <div className={s.infoNumber}>{followers}</div>
    </div>
  </div>
);
