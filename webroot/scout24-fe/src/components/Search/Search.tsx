import { ChangeEventHandler, useMemo } from "react";
import { debounce } from "lodash";

import "./Search.scss";

interface Props {
  disabled?: boolean;
  setSearchValue?: (value: string) => void;
}

export const Search: React.FC<Props> = ({ disabled, setSearchValue }) => {
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setSearchValue && setSearchValue(value);
  };
  const debouncedChangeHandler = useMemo(() => {
    return debounce(handleInputChange, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="search">
      <input
        className="search__input"
        placeholder="Filter recipes..."
        onChange={debouncedChangeHandler}
        disabled={disabled}
      />
    </div>
  );
};
