import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from '@main_module/containers/Header';

describe('The Header component', () => {
	it('should renders correctly', () => {
		const tsx = (<Header />);
		const tree = renderer
			.create(tsx)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
