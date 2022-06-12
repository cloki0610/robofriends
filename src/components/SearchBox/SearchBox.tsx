import React from "react";

type SearchInput = {
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchfield: string;
};

const SearchBox: React.FC<SearchInput> = ({ searchChange, searchfield }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        className="pa3 ba b--green bg-lightest-blue"
        placeholder="Search Robots"
        onChange={searchChange}
        value={searchfield}
      />
    </div>
  );
};

export default SearchBox;
