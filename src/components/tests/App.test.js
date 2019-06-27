import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import App from 'components/App';

test('App should render correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
