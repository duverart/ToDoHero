import { useContext } from "react";
import { todoContex } from "./TodosContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(todoContex);

  return (
    <div className="flex items-center justify-center w-full p-4">
      <input
        type="text"
        value={searchValue}
        className="
          w-full sm:w-10/12 md:w-8/12 lg:w-6/12
          p-3
          bg-background border border-secondary text-textPrimary
          rounded placeholder:text-center
          text-center
          focus:outline-none focus:ring-2 focus:ring-secondary
        "
        placeholder="Buscar..."
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
