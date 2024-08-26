import { useState, useEffect } from "react";

// Lista de posibles placeholders
const placeholders = [
  "Comprar alimentos para la semana",
  "Hacer ejercicio en el gimnasio",
  "Llamar al médico para una cita",
  "Leer un capítulo de un libro",
  "Preparar una presentación para el trabajo",
  "Limpiar la casa",
  "Organizar el escritorio",
  "Hacer una lista de compras",
  "Preparar la cena",
  "Revisar correos electrónicos",
  "Hacer la colada",
  "Recoger la ropa en la tintorería",
  "Escribir un informe para el trabajo",
  "Estudiar para un examen",
  "Hacer una caminata al aire libre",
  "Pagar las facturas",
  "Hacer una llamada a un amigo",
  "Escribir una carta de agradecimiento",
  "Planificar las actividades del fin de semana",
  "Revisar y actualizar el presupuesto",
  "Hacer una cita con el dentista",
  "Hacer una limpieza profunda del baño",
  "Organizar los documentos importantes",
  "Preparar una lista de objetivos para la semana",
  "Llamar a un familiar",
  "Comprar un regalo para un cumpleaños",
  "Visitar un museo o galería",
  "Hacer un presupuesto para un proyecto",
  "Preparar un almuerzo para llevar al trabajo",
  "Hacer una donación a una causa benéfica",
  "Inscribirse en una clase de cocina",
  "Hacer una llamada de seguimiento a un cliente",
  "Actualizar el perfil de LinkedIn",
  "Programar una reunión con el equipo",
  "Regar las plantas",
  "Ir al gimnasio para una clase de yoga",
  "Hacer una lista de tareas para la semana siguiente",
  "Revisar y organizar la carpeta de documentos",
  "Revisar el calendario de eventos familiares",
  "Preparar un informe de progreso del proyecto",
  "Hacer un chequeo de seguridad en el hogar",
  "Comprar productos de limpieza para la casa",
  "Hacer una sesión de fotos para un proyecto",
  "Hacer una búsqueda de recetas nuevas",
  "Preparar un paquete para enviar por correo",
  "Leer un artículo de interés personal",
  "Asistir a una reunión de padres en la escuela",
  "Limpiar y organizar la despensa",
  "Establecer metas personales para el mes",
  "Hacer un seguimiento de los objetivos de salud",
];

// Hook personalizado para obtener un placeholder aleatorio
export function useRandomPlaceholder() {
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    // Función para obtener un placeholder aleatorio
    const getRandomPlaceholder = () => {
      const randomIndex = Math.floor(Math.random() * placeholders.length);
      return placeholders[randomIndex];
    };

    // Establecer el placeholder aleatorio en el estado
    setPlaceholder(getRandomPlaceholder());
  }, []); // El hook se ejecuta solo una vez cuando el componente se monta

  return placeholder;
}
