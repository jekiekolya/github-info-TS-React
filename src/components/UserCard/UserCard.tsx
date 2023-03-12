// Component
import { UserStat } from "components/UserStat";

// Styles
import s from "./UserCard.module.scss";

// Types
import { LocalGithubUser } from "types";
import { UserTitle } from "components/UserTitle";

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={s.userCard}>
      <img src={props.avatar} alt={props.name} className={s.avatar} />
      <UserTitle
        created={props.created}
        login={props.login}
        name={props.name}
      />
      <p className={`${s.bio}${!props.bio ? "" : ` ${s.empty}`}`}>
        {props.bio || "This user has no bio"}
      </p>
      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />
    </div>
  );
};
