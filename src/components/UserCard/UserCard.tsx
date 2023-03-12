// Component
import { UserStat } from "components/UserStat";

// Styles
import s from "./UserCard.module.scss";

// Types
import { LocalGithubUser } from "types";

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={s.userCard}>
    <div></div>

    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
  </div>
);
