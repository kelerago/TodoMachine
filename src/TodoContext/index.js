import { useState, createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

const TodoProvider = (props) => {
  const { todos, saveTodos, loading, error } = useLocalStorage("TODOS_V1", [{text: 'Pepito', completed: false}]);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if (searchValue.length > 0) {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  } else {
    searchedTodos = todos;
  }

  const handleCompleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const handleDeleteTodo = (text) => {
    let newTodos = [...todos];
    newTodos = newTodos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };

  const handleAddTodo = text => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false
    });
    saveTodos(newTodos);
  }

  const state = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    handleCompleteTodo,
    handleDeleteTodo,
    handleAddTodo,
    openModal,
    setOpenModal,
  };

  return (
    <TodoContext.Provider value={state}>{props.children}</TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
