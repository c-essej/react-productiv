import EditableTodoList from './EditableTodoList';
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TEST_TODOS from './_testCommon';

describe("tests for EditableTodoList", function () {

  test("Renders without error", function () {
    render(<EditableTodoList todos={TEST_TODOS} />);
  });

  test("Renders correct number of EditableTodos", function () {
    const { container } = render(<EditableTodoList todos={TEST_TODOS} />);
    expect(container.querySelectorAll(".EditableTodo").length).toEqual(3);

  });

  it("matches snapshot", function () {
    const { container } = render(<EditableTodoList todos={TEST_TODOS} />);

  expect(container).toMatchSnapshot();
  })

});