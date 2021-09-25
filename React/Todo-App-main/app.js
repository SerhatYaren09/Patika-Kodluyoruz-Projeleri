import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    switch (status) {
      case "active":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  }, [todos, status]);

  return (
    <>
      <section className="todoapp">
        <Header inputTodo={inputTodo} setInputTodo={setInputTodo} todos={todos} setTodos={setTodos} status={status} setStatus={setStatus} />
        <Main todos={todos} setTodos={setTodos} status={status} setStatus={setStatus} filterTodos={filterTodos} />
      </section>
      <Footer todos={todos} setTodos={setTodos} status={status} setStatus={setStatus} />
    </>
  );
}

export default App;