import { useState } from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [todos, setTodos] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  window.setTimeout(() => {
    try {
      let savedTodos = localStorage.getItem(itemName);

      if (savedTodos) {
        savedTodos = JSON.parse(savedTodos);
      } else {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        savedTodos = initialValue;
      }

      setTodos(savedTodos);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }, 3000);

  const saveTodos = (todos) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(todos));
      setTodos(todos);
    } catch (error) {
      setError(error);
    }
  };

  return {
    todos,
    saveTodos,
    loading,
    error,
  };
};

export { useLocalStorage };