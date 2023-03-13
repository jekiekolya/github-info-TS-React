// React
import { useState } from "react";

// Components
import { Container } from "components/Container";
import { Header } from "components/Header";
import { Search } from "components/Search";
import { UserCard } from "components/UserCard";

// Data
import { defaultUser } from "mock";

// Types
import { GithubError, GithubUser, LocalGithubUser } from "types";
import { isGithubUser } from "utils/typeguards";
import { extractLocalGithubUser } from "utils/extract-local-user";

const BASE_URL = "https://api.github.com/users/";

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (userName: string) => {
    const url = `${BASE_URL}${userName}`;

    const res = await fetch(url);
    const user = (await res.json()) as GithubUser | GithubError;

    if (isGithubUser(user)) {
      setUser(extractLocalGithubUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
