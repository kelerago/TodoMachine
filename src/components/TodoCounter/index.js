import { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoCounter.css";

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} tareas de {totalTodos}
    </h2>
  );
};

export { TodoCounter };
