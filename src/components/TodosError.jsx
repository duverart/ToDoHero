export function TodosError() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-10 p-4">
      <p className="text-3xl font-semibold text-red-500">
        ¡Oops! Ocurrió un error inesperado.
      </p>
      <p className="text-gray-300 mt-2">
        Por favor, intenta recargar la página o vuelve más tarde.
      </p>
      <div className="mt-4">
        <button
          className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-red-600 transition duration-300"
          onClick={() => window.location.reload()}
        >
          Recargar Página
        </button>
      </div>
    </div>
  );
}
