import React from 'react';
import renderer from 'react-test-renderer';

import { InputSearch } from '@base/components/InputSearch';

describe('The InputSearch component', () => {
	it('should renders correctly', () => {
		const tsx = (
			<InputSearch
				value=""
				onChange={() => {}}
				name="input_search"
				placeholder="Search"
			/>
		);
		const tree = renderer
			.create(tsx)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
