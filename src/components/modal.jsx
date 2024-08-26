import { createPortal } from "react-dom";

export function MODAL({ children }) {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative w-full max-w-lg p-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-xl shadow-lg animate-fadeIn">

        <div className="text-primary font-black">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("modal") // Asegúrate de que el div con id="modal" esté presente en tu HTML
  );
}
