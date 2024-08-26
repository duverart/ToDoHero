import { useContext, useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { todoContex } from "./TodosContext";

function TodoCounter() {
  const {
    totalTodos,
    completedTodos,
  } = useContext(todoContex);

  const [hasFiredConfetti, setHasFiredConfetti] = useState(false);
  const prevTotalRef = useRef(totalTodos);

  useEffect(() => {
    if (completedTodos === totalTodos && totalTodos > 0 && !hasFiredConfetti) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setHasFiredConfetti(true);
    }

    if (totalTodos !== prevTotalRef.current) {
      setHasFiredConfetti(false); // Reset confetti when total number of ToDos changes
    }

    prevTotalRef.current = totalTodos;
  }, [completedTodos, totalTodos, hasFiredConfetti]);

  return (
    <h1 className="text-textSecondary font-bold text-center text-3xl p-4">
      {totalTodos === 0
        ? "Listo para comenzar a planificar tu día 😎"
        : completedTodos === totalTodos && totalTodos >= 1
          ? "¡Felicitaciones! Has completado todos tus ToDos 🎉"
          : <>Has completado <strong className="text-accent">{completedTodos}</strong> de <strong className="text-accent">{totalTodos}</strong> ToDos</>
      }
    </h1>
  );
}

export { TodoCounter };
