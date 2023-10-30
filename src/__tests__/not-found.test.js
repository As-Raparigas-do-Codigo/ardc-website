import * as React from 'react';
import * as renderer from 'react-test-renderer';
import NotFound404 from 'pages/NotFound404';

const translationProps = {
  translation: jest.fn()
};

it('renders correctly', () => {
  const tree = renderer.create(<NotFound404 {...translationProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
