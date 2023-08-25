import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);
  console.log('TodoApp', todos);
  let top = todos.reduce(
    (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  /** add a new todo to list */
  function create(todo) {
    const newTodo = { ...todo, id: uuid() };
    setTodos(todos => [...todos, newTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(todos => todos.map(
      todo => todo.id === updatedTodo.id ? updatedTodo : todo
    ));
  }

  /** delete a todo by id */
  function remove(id) {
    console.log("running remove");
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6 EditableTodoList">
          <h3>Todos</h3>
          {todos.length > 0
            ?
            <EditableTodoList todos={todos} update={update} remove={remove} />
            :
            <span className="text-muted">You have no todos.</span>}
        </div>

        <div className="col-md-6">
          {top
            ?
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos} />
            </section>
            :
            ""
          }

          <section>
            <h3 className="mb-3 TodoForm">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;