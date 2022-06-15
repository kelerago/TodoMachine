import { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoSearch.css";

const TodoSearch = () => {
  const {searchValue, setSearchValue} = useContext(TodoContext);
  
  const onSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Buscar..."
      onChange={onSearch}
      value={searchValue}
    />
  );
};

export { TodoSearch };
