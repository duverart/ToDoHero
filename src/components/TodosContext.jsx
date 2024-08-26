import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage.jsx";

// Crear el contexto para gestionar los ToDos
const todoContex = React.createContext();

function TodoProvide({ children }) {

  // Estado para el valor de búsqueda
  const [searchValue, setSearchValue] = useState('');

  // Estado para controlar si el modal está abierto
  const [openModal, setOpenModal] = useState(false);

  // Estado para guardar el ToDo que está siendo editado
  const [editingTodo, setEditingTodo] = useState(null);

  // Función para manejar la apertura del modal
  const handleClick = () => {
    setOpenModal(true); // Esto abre el modal
  };

  // Hook personalizado para manejar los ToDos guardados en localStorage
  const { item: todos, saveItem: saveTodos, error, loading } = useLocalStorage('TODO_V1', []);

  // Calcula la cantidad de ToDos completados
  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  // Calcula la cantidad total de ToDos
  const totalTodos = todos.length;

  // Filtra los ToDos según el valor de búsqueda
  const buscadorDeToDos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  // Función para agregar un nuevo ToDo
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ id: Date.now(), text, completed: false }); // Añadimos un ID único
    saveTodos(newTodos);
  };

  // Función para editar un ToDo existente
  const editTodo = (oldText, newText) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === oldText); // Busca el índice del ToDo a editar
    if (todoIndex !== -1) {
      newTodos[todoIndex].text = newText; // Actualiza el texto del ToDo
      saveTodos(newTodos); // Guarda los ToDos actualizados en localStorage
    }
  };

  // Función para marcar un ToDo como completado
  const completedTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    if (todoIndex !== -1) {
      newTodos[todoIndex].completed = true; // Marca el ToDo como completado
      saveTodos(newTodos); // Guarda los ToDos actualizados
    }
  }

  // Función para alternar entre completado e incompleto
  const toggleTodoCompletion = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    if (todoIndex !== -1) {
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // Alterna el estado del ToDo
      saveTodos(newTodos); // Guarda los ToDos actualizados
    }
  };

  // Función para eliminar un ToDo
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text); // Elimina el ToDo filtrando por el texto
    saveTodos(newTodos); // Guarda los ToDos actualizados
  }

  // Renderizado del proveedor de contexto
  return (
    <todoContex.Provider value={{
      // Valores de estado y funciones disponibles globalmente
      error,            // Manejo de errores
      loading,          // Estado de carga
      totalTodos,       // Total de ToDos
      completedTodos,   // Total de ToDos completados
      searchValue,      // Valor de búsqueda
      setSearchValue,   // Función para actualizar el valor de búsqueda
      buscadorDeToDos,  // Lista de ToDos filtrados por búsqueda
      completedTodo,    // Función para completar un ToDo
      toggleTodoCompletion, // Función para alternar el estado de completado
      deleteTodo,       // Función para eliminar un ToDo
      openModal,        // Estado del modal (abierto/cerrado)
      setOpenModal,     // Función para cambiar el estado del modal
      handleClick,      // Función para abrir el modal
      addTodo,          // Función para agregar un nuevo ToDo
      editTodo,         // Función para editar un ToDo existente
      editingTodo,      // ToDo que está siendo editado
      setEditingTodo,   // Función para establecer el ToDo que se está editando
    }}>
      {children} {/* Renderiza los componentes hijos */}
    </todoContex.Provider>
  );
}

// Exportamos el contexto y el proveedor
export { todoContex, TodoProvide };
