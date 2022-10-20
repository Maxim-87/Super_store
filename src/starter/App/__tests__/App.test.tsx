import React from 'react';

// @ts-ignore
import renderer from 'react-test-renderer';
import App  from 'starter/App/App';
import {render, screen} from "@testing-library/react";

describe('The App component', () => {
	it('renders without crashing', () => {
		render(<App/>)
		const linkElement = screen.getByText(/App/i);
		expect(linkElement).toMatchSnapshot();
	});
});
