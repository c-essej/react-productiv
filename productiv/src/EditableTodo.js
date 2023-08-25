import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 * State
 * -isEditing
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */
//TODO: reflect this in docstring(removeMe)
function EditableTodo({ todo, update, removeMe }) {
  const [isEditing, setIsEditing] = useState(false);


  /** Toggle if this is being edited */
  //TODO: use callback pattern
  function toggleEdit() {
    setIsEditing(!isEditing);
  }

  /** Call remove fn passed to this component. */
  function handleDelete() {
    removeMe();
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    const updatedTodo = {...formData, id:todo.id}
    update(updatedTodo);
    toggleEdit();
  }
//TODO: change some of this formating
  return (
    <div className="EditableTodo">

      {isEditing ?

        <TodoForm initialFormData={todo}
        handleSave={handleSave}/>

        :

        <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}>
              Del
            </button>
          </div>
          <Todo todo={todo}/>
        </div>}

    </div>
  );
}

export default EditableTodo;
