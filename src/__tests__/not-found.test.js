import * as React from 'react';
import * as renderer from 'react-test-renderer';
import NotFound404 from 'pages/NotFound404';
import { addI18nResources, initI18n } from '../constants/test-utils';
import { render, screen } from '@testing-library/react';
// import i18n from 'i18next';

const INITIAL_TRANSLATION = {};

beforeAll(() => {
  initI18n(INITIAL_TRANSLATION);
});

afterEach(() => {
  // this would remove all existing translation and load initial one.
  addI18nResources(INITIAL_TRANSLATION);
});

const translationProps = {
  translation: jest.fn()
};

describe('testing NotFound404.js', () => {
  it('renders correctly', () => {
    const page = renderer.create(<NotFound404 {...translationProps} />).toJSON();

    expect(page).toMatchSnapshot();
  });
});

describe('testing page rendering without translation', () => {
  it('should render 404 page without translation', () => {
    render(<NotFound404 {...translationProps} />);
    const page = screen.getByRole('heading', {
      name: ''
    });

    expect(page).toMatchSnapshot();
  });
});

describe('testing page rendering with translation', () => {
  it('should render page with translation', () => {
    addI18nResources({ NotFound404: { heading: 'Oops! Página não encontrada...' } });
    render(<NotFound404 {...translationProps} />);
    const page = screen.getByRole('heading', {
      name: '',
      value: 'Oops! Página não encontrada...'
    });

    expect(page).toMatchSnapshot();
  });
});
