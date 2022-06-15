import { useContext, useState } from "react";
import { TodoContext } from "../../TodoContext";
import './TodoForm.css';

const TodoForm = () => {
  const { handleAddTodo, setOpenModal } = useContext(TodoContext);

  const [todoText, setTodoText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTodo(todoText);
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        onChange={handleChangeTodoText}
        placeholder="TODO"
        type="text"
        value={todoText}
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button-cancel"
          type="button"
          onClick={() => handleCancel()}
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
