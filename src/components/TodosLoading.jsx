export function TodosLoading() {
  return (
    <li className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-shimmer backdrop-blur-md text-textPrimary p-4 rounded-lg m-4 border border-white/30 flex items-center shadow-md">
      <span className="flex justify-center items-center w-10 h-10 cursor-default bg-gray-300 rounded-full" />
      <p className="text-2xl flex-1 text-center bg-gray-300 rounded-lg h-6 mx-4"></p>
      <span className="flex justify-center items-center w-10 h-10 cursor-default bg-gray-300 rounded-full" />
      <span className="flex justify-center items-center w-10 h-10 cursor-default bg-gray-300 rounded-full" />
    </li>
  );
}
