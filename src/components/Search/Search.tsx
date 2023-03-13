// Icons
import { ReactComponent as SearchIcon } from "assets/icon-search.svg";

// Styles
import s from "./Search.module.scss";
import { Button } from "components/Button";

// Types
interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();

    const text = e.currentTarget.username.value;

    if (text.trim()) {
      onSubmit(text);
      e.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} autoCapitalize="off">
      <div className={s.search}>
        <label htmlFor="search">
          <SearchIcon />
        </label>
        <input
          type="text"
          className={s.textField}
          id="search"
          name="username"
          placeholder="Search GitHub username..."
        />
        {hasError && <div className={s.error}>No result</div>}
        <Button text="Search" />
      </div>
    </form>
  );
};
