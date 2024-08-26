function CreateTodoButton({ onClick }) {
  return (
    <div className="fixed bottom-5 right-5">
      <button
        className="bg-accent text-white py-4 px-6 rounded-full shadow-lg transform transition duration-500 ease-in-out hover:bg-red-600 hover:scale-110 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 animate-bounce"
        onClick={onClick}
      >
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };
