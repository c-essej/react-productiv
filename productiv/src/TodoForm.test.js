import TodoForm from './TodoForm';
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TEST_TODOS from './_testCommon';

const handleSave = jest.fn();

describe("Tests for Todo Form", function () {

  //smoke test
  test("Renders without crashing", function () {
    const { container } = render(<TodoForm />);
  });

  //snapshot test
  it("matches snapshot", function () {
    const { container } = render(
      <TodoForm />);

    expect(container).toMatchSnapshot();
  });

  //button calls handleSave
  test("Go button should run handleSave", function () {
    const { container } = render(<TodoForm handleSave={handleSave} />);

    const goButton = container.querySelector(".NewTodoForm-addBtn");
    fireEvent.click(goButton);

    expect(handleSave).toHaveBeenCalled();
  });

  test("Go button clears form", function () {
    const { container, getByLabelText, debug } = (
      render(<TodoForm handleSave={handleSave} />)
    );

    const nameField = getByLabelText("Title:");
    console.log("nameField: ")
    debug(nameField)
    const descriptionField = getByLabelText("Description:");
    const priorityField = container.querySelector("#NewTodoForm-priority");
    const goButton = container.querySelector(".NewTodoForm-addBtn");

    //change values
    fireEvent.change(nameField, { target: { value: "newTitle" } });
    fireEvent.change(descriptionField, { target: { value: "newDesc" } });
    fireEvent.change(priorityField, { target: { value: 1 } });

    //check that values changed
    expect(nameField.value).toEqual("newTitle");
    expect(descriptionField.value).toEqual("newDesc");
    expect(priorityField.value).toEqual("1");

    //click button
    fireEvent.click(goButton);

    //test for reset values
    expect(nameField.value).toEqual("");
    expect(descriptionField.value).toEqual("");
    expect(priorityField.value).toEqual("3");


  });

});