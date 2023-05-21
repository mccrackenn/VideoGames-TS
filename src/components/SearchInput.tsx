import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (ref.current) setSearchText(ref.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
