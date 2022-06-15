import { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoButton.css";

const TodoButton = () => {
  const { setOpenModal } = useContext(TodoContext);

  const onAdd = () => {
    setOpenModal(openModal => !openModal);
  };

  return (
    <button className="TodoButton" onClick={onAdd}>
      +
    </button>
  );
};

export { TodoButton };
