import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

import App from './App';

describe("App Component", () => {
    it("should render App component", () => {
		  const wrapper = shallow(<App />);
	});
});