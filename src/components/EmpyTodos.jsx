import { useContext } from "react";
import { todoContex } from "./TodosContext";

export function EmpyTodos() {
  const { searchValue, buscadorDeToDos, totalTodos } = useContext(todoContex);

  // Si hay un valor de búsqueda y no hay resultados
  if (searchValue.length > 0 && buscadorDeToDos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center mt-10 p-4">
        <p className="text-2xl font-semibold text-white"> {/* Cambié a 'text-white' */}
          No se encontraron resultados para
          <span className="font-bold text-yellow-400"> "{searchValue}"</span> {/* Cambié a un amarillo claro */}
        </p>
        <p className="text-gray-200 mt-2"> {/* Ajusté a un gris claro para mejor contraste */}
          Intenta con un término diferente
        </p>
      </div>
    );
  }

  // Si no hay ToDos y no se está buscando
  if (totalTodos === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center mt-10 p-4">
        <p className="text-2xl font-semibold text-white">Crea tu primer ToDo</p>
        <p className="text-gray-200 mt-2">Haz clic en el botón "+" para agregar tu primera tarea</p>
        <div className="mt-4">
        </div>
      </div>
    );
  }

  return null; // No mostrar nada si no se cumple ninguna de las condiciones
}
