import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos }) {
  // lowest-priority # is the highest priority
  let top = todos.reduce(
    (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);


  return (
    <div>
      <h2>Top Todo:</h2>
      <Todo
        todo={top} />
    </div>
  );
};

export default TopTodo;