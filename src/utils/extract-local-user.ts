import { GithubUser, LocalGithubUser } from "types";

export const extractLocalGithubUser = (user: GithubUser): LocalGithubUser => ({
  id: user.id,
  login: user.login,
  avatar: user.avatar_url,
  bio: user.bio,
  blog: user.blog,
  company: user.company,
  created: user.created_at,
  followers: user.followers,
  following: user.following,
  location: user.location,
  name: user.name,
  repos: user.public_repos,
  twitter: user.twitter_username,
});
