import NotFound404 from 'pages/NotFound404';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

const translationProps = {
  translation: jest.fn()
};

it('renders correctly', () => {
  const tree = renderer.create(<NotFound404 {...translationProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
