import TodoApp from './TodoApp';
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TEST_TODOS from './_testCommon';
import TodoForm from './TodoForm';


describe("Tests for Todo App", function () {

  //smoke test
  it("Renders without crashing", function () {
    const { container } = render(<TodoApp initialTodos={TEST_TODOS} />);
  });

  //snapshot test
  it("matches snapshot", function () {
    const { container } = render(
      <TodoApp initialTodos={TEST_TODOS} />);

    expect(container).toMatchSnapshot();
  });


  it("Renders all todos", function () {
    const { container } = render(
      <TodoApp initialTodos={TEST_TODOS} />);

    expect(container).toHaveTextContent('test1');
    expect(container).toHaveTextContent('test2');
    expect(container.querySelector(".EditableTodoList")).toHaveTextContent('test1');
  });

  it("Renders todo form", function () {
    const { container } = render(
      <TodoApp initialTodos={TEST_TODOS} />);

    expect(container.querySelector(".TodoForm")).toBeInTheDocument();
  });

  it("creates a new todo", function () {
    const { container, getByLabelText, debug } = render(
      <TodoApp initialTodos={TEST_TODOS} />);

    const nameField = getByLabelText("Title:");
    const descriptionField = getByLabelText("Description:");
    const priorityField = getByLabelText("Priority:");
    const goButton = container.querySelector(".NewTodoForm-addBtn");

    fireEvent.change(nameField, { target: { value: "newTitle" } });
    fireEvent.change(descriptionField, { target: { value: "newDesc" } });
    fireEvent.change(priorityField, { target: { value: 1 } });

    fireEvent.click(goButton);

    debug(nameField);

    debug(container.querySelector(".EditableTodoList"));
    expect(container.querySelector(".EditableTodoList")).toHaveTextContent('newTitle');



  });

});
