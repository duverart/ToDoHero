import React, { useState, useContext, useEffect } from "react";
import { todoContex } from "./TodosContext.jsx";
import { useRandomPlaceholder } from "./useRandomPlaceholder"; // Importar el hook personalizado

export function TodoForm() {
  const { addTodo, editTodo, setOpenModal, editingTodo, setEditingTodo } = useContext(todoContex);
  const [newTodoValue, setNewTodoValue] = useState("");
  const placeholder = useRandomPlaceholder(); // Usar el hook para obtener el placeholder aleatorio

  // Si hay un ToDo en edición, inicializa el texto
  useEffect(() => {
    if (editingTodo) {
      setNewTodoValue(editingTodo.text);
    }
  }, [editingTodo]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.trim()) {
      if (editingTodo) {
        // Editar ToDo existente
        editTodo(editingTodo.id, newTodoValue);
        setEditingTodo(null); // Limpiar el ToDo en edición
      } else {
        // Añadir nuevo ToDo
        addTodo(newTodoValue);
      }
      setOpenModal(false); // Cerrar modal después de agregar o editar
    }
  };

  const onCancel = () => {
    setOpenModal(false);
    setEditingTodo(null); // Limpiar el estado de edición si se cancela
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder={placeholder} // Usar el placeholder aleatorio
        className="w-full p-2 rounded"
        autoFocus
      />
      <div className="flex justify-end mt-4">
        <button
          type="button"
          className="bg-red-500 text-white py-2 px-4 rounded mr-2"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          {editingTodo ? "Guardar cambios" : "Añadir ToDo"}
        </button>
      </div>
    </form>
  );
}
