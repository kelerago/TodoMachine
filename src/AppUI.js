import {
  TodoCounter,
  TodoList,
  TodoItem,
  TodoButton,
  TodoSearch,
} from "./components";
import { TodoContext } from "./TodoContext";
import { useContext } from "react";
import { Modal } from "./components/Modal";
import { TodoForm } from "./components/TodoForm";
import { TodoLoading, TodoError, TodoEmpty } from './components/Feedback';

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    handleCompleteTodo,
    handleDeleteTodo,
    openModal,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {totalTodos === 0 && !loading && <TodoEmpty />}

        {!loading && searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            onComplete={() => handleCompleteTodo(todo.text)}
            onDelete={() => handleDeleteTodo(todo.text)}
            {...todo}
          />
        ))}
      </TodoList>
      
      <TodoButton />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
};

export { AppUI };
