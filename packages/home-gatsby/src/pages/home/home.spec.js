import React from "react";
import renderer from "react-test-renderer"

import Home from './';

test('renders', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON()
  expect(tree).toMatchSnapshot()
});
