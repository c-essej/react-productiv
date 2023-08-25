import EditableTodo from './EditableTodo';
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TEST_TODOS from './_testCommon';
import TodoForm from './TodoForm';



it("renders without crashing", function () {
  const {container, debug } = render(
  <EditableTodo todo={TEST_TODOS} />);
  debug(container);
});

it("tests for edit button", function () {
  const testFunc = function(){}
  const { container } = render(
    <EditableTodo todo={TEST_TODOS[0]}
      update={testFunc} />
  );

  expect(container.querySelector(".EditableTodo")).toBeInTheDocument();

  const editButton = container.querySelector(".EditableTodo-toggle");
  fireEvent.click(editButton);
  expect(editButton).not.toBeInTheDocument();

  const goButton = container.querySelector(".NewTodoForm-addBtn");
  fireEvent.click(goButton);
  expect(container.querySelector(".EditableTodo")).toBeInTheDocument();

});
