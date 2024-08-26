/* eslint-disable react/prop-types */
import { TodoCounter } from "./TodoCounter..jsx";
import { TodoSearch } from "./TodoSearch.jsx";
import { TodoList } from "./TodoList.jsx";
import { TodoItems } from "./TodoItems.jsx";
import { CreateTodoButton } from "./CreateTodoButton.jsx";
import { Header } from "./header.jsx";
import { TodosError } from "./TodosError.jsx";
import { TodosLoading } from "./TodosLoading.jsx";
import { EmpyTodos } from "./EmpyTodos.jsx";
import { todoContex } from "./TodosContext.jsx";
import { useContext } from "react";
import { MODAL } from "./modal.jsx";
import { TodoForm } from "./TodoForm.jsx";


export function AppUI( ) {
  const { error,
    loading,
    buscadorDeToDos,
    completeTodos,
    deleteTodo,
    openModal,
    handleClick,
  } = useContext(todoContex)




return (
  <>
    <div className= "min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-6">
    <Header />
    <TodoSearch  />
    <TodoCounter />

    <TodoList>
            {loading && <TodosLoading />}
            {loading && <TodosLoading />}
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {!loading && buscadorDeToDos.length === 0 && <EmpyTodos />}
            {buscadorDeToDos.map((todo) => (
              <TodoItems
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodos(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
     </TodoList>

      <CreateTodoButton onClick={handleClick} />

    {openModal &&(
      <MODAL>
        <TodoForm />
      </MODAL>
    )}
    </div>

  </>
);
}