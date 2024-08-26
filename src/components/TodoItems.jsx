import { useContext, useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { MdModeEditOutline } from "react-icons/md";
import { todoContex } from "./TodosContext.jsx";

function TodoItems(props) {
  const { completedTodo, toggleTodoCompletion, deleteTodo, setEditingTodo, setOpenModal } = useContext(todoContex);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleCompleteClick = () => {
    if (props.completed) {
      setShowConfirm(true); // Mostrar el modal de confirmación si ya está completa
    } else {
      completedTodo(props.text); // Marcar como completada si no lo está
    }
  };

  const confirmUncomplete = () => {
    toggleTodoCompletion(props.text); // Cambiar el estado a incompleta
    setShowConfirm(false); // Cerrar el modal
  };

  const cancelUncomplete = () => {
    setShowConfirm(false); // Cerrar el modal sin cambios
  };

  const handleEditClick = () => {
    setEditingTodo({ text: props.text });
    setOpenModal(true);
  };

  return (
    <>
      <li className="relative bg-white/10 backdrop-blur-md text-textPrimary p-4 rounded-lg m-4 border border-white/30 flex items-center bg-white bg-opacity-20 shadow-md">
        <span
          className={`flex justify-center items-center w-10 h-10 cursor-pointer ${props.completed ? 'text-green-500' : 'text-gray-500'}`}
          onClick={handleCompleteClick}
        >
          <GiCheckMark className="text-3xl" />
        </span>
        <p
          className={`text-2xl flex-1 text-center ${props.completed ? 'text-green-500 line-through' : ''}`}
        >
          {props.text}
        </p>
        <span className="flex justify-center items-center w-10 h-10 cursor-pointer text-white hover:text-gray-300 hover:scale-110" onClick={handleEditClick}>
          <MdModeEditOutline className="text-3xl" />
        </span>
        <span className="flex justify-center items-center w-10 h-10 cursor-pointer text-red-500 hover:text-red-700 hover:scale-110" onClick={() => deleteTodo(props.text)}>
          <FaTrashCanArrowUp className="text-3xl" />
        </span>
      </li>

      {/* Modal de confirmación */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl mb-4">¿Seguro que quieres desmarcar esta tarea?</p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded"
                onClick={confirmUncomplete}
              >
                Sí
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded"
                onClick={cancelUncomplete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { TodoItems };
