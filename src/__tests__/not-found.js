import '@testing-library/jest-dom'

import * as React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import NotFound404 from 'pages/NotFound404';
import LinkButton from 'components/LinkButton';

const translationProps = {
	translation:	jest.fn(),
};

test('shows the not found page if page does not exist ', async () => {
	render(<NotFound404 {...translationProps} />);
	expect(screen.getByText('Erro 404')).toBeInTheDocument();
	expect(screen.getByTestId('NotFound404-Title')).toBeInTheDocument();
	expect(screen.getByTestId('NotFound404-Subtitle')).toBeInTheDocument();

	await userEvent.click(screen.getByRole('link', {id: 'NotFound404-Button'}));

	expect(LinkButton).toBeDefined();
	expect(screen.getByRole('link', {id: 'NotFound404-Button'}).getAttribute('href')).toBe('/');

	expect(translationProps.translation).toHaveBeenCalledTimes(3);

});
