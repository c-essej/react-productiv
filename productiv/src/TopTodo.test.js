import TopTodo from './TopTodo';
import React from "react"
import { render } from "@testing-library/react";
import TEST_TODOS from './_testCommon'


it("shows top todo", function () {
  const {container} = render( <TopTodo todos={TEST_TODOS}/>)

expect(container).toBeInTheDocument();
expect(container).toContainHTML("test1 description");
expect(container).not.toContainHTML("test2 description");
expect(container).not.toContainHTML("test3 description");

});


it("matches snapshot", function () {
  const { container } = render(
    <TopTodo todos={TEST_TODOS} />);

expect(container).toMatchSnapshot();
});