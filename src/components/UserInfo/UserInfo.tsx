// component
import { ReactComponent as CompanyIcon } from "assets/icon-company.svg";
import { ReactComponent as LocationIcon } from "assets/icon-location.svg";
import { ReactComponent as TwitterIcon } from "assets/icon-twitter.svg";
import { ReactComponent as WebsiteIcon } from "assets/icon-website.svg";

// Styles
import s from "./UserInfo.module.scss";

// Types
import { InfoItem, InfoItemProps } from "components/InfoItem";
import { LocalGithubUser } from "types";

interface UserInfoProps
  extends Pick<LocalGithubUser, "blog" | "company" | "location" | "twitter"> {}

export const UserInfo = ({
  blog,
  company,
  location,
  twitter,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <WebsiteIcon />,
      isLink: true,
      text: blog,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },

    {
      icon: <CompanyIcon />,
      text: company,
    },
  ];
  return (
    <div className={s.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
};
