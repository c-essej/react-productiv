import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({todos, update, remove}) {
  console.log(`Rendering editable todo list \n
      todos: ${todos} \n
      update:${update} \n
      remove: ${remove}`)
  return (
      <div>
        {todos.map(todo => <EditableTodo todo={todo}
        update={update}
        removeMe={()=>remove(todo.id)}
        key={todo.id}/>)}
      </div>
  );
}

export default EditableTodoList;


// remove={remove.bind(this,todo.id)}