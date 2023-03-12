// Component
import { UserStat } from "components/UserStat";
import { UserTitle } from "components/UserTitle";
import { UserInfo } from "components/UserInfo";

// Styles
import s from "./UserCard.module.scss";

// Types
import { LocalGithubUser } from "types";

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
      <UserInfo
        blog={props.blog}
        company={props.company}
        location={props.location}
        twitter={props.twitter}
      />
    </div>
  );
};
