import React from 'react';

import renderer from 'react-test-renderer';
import { Text } from '..';

describe('The Text component', () => {
	it('should renders correctly', () => {
		const tsx = <Text>Text</Text>;
		const tree = renderer.create(tsx).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
