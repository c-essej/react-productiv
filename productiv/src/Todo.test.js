import Todo from './Todo';
import React from "react"
import { render } from "@testing-library/react";
import TEST_TODOS from './_testCommon'

const TEST_TODO = TEST_TODOS[0]

it("renders without crashing", function () {
  render( <Todo todo={TEST_TODO}/>)
});

it("matches snapshot", function () {
  const { container } = render(
    <Todo todo={TEST_TODO} />);

expect(container).toMatchSnapshot();
});


