import React, { useContext, useEffect, useState } from "react";
import { themeContext } from "../contexts/themeContext";

const TodoList = () => {
  const [isDark] = useContext(themeContext);
  const [todos, setTodos] = useState([
    { text: " i have to complete the project", id: crypto.randomUUID() },
    { text: " i have to complete the project", id: crypto.randomUUID() },
    { text: " i have to complete the project", id: crypto.randomUUID() },
  ]);
  const [todoValue, setTodoValue] = useState({
    text: "",
    id: "",
  });
  const [todoId, setTodoId] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (todoValue.text) {
      setTodos((prevState) => [...prevState, todoValue]);
    }
    setTodoValue({
      text: "",
      id: "",
    });
    setTodoId("");
  }
  function del() {
    const result = todos.filter((todoItems) => {
      return todoItems.id !== todoId;
    });
    setTodos([...result]);
    setTodoId("");
  }
  useEffect(() => {
    del();
  }, [todoId]);
  return (
    <>
      <div
        className={`w-full flex-grow  flex flex-col  gap-4  p-4 border ${
          isDark ? "bg-gray" : "bg-white"
        } border-gray-200`}
      >
        <div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="mb-4 flex flex-wrap justify-center gap-4"
            >
              <input
                type="text"
                placeholder="Add a todo"
                className=" py-2 px-4  border rounded flex-1 bg-transparent outline-none"
                value={todoValue.text}
                onChange={(e) =>
                  setTodoValue({
                    text: e.target.value,
                    id: crypto.randomUUID(),
                  })
                }
              />
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded "
              >
                Add Todo
              </button>
            </form>
          </div>
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="mb-2 p-2  flex justify-between border rounded bg-gray-100"
              >
                <div className="h-full  overflow-x-hidden">{todo.text}</div>
                <div>
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => {
                      setTodoId(todo.id);
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoList;
