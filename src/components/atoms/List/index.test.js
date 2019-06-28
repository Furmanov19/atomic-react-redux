import React from 'react';
import { mount } from 'enzyme';
import List from '.';

const wrap = (props = {}) => mount(<List {...props} children="test" />);

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' });
  expect(wrapper.props().children).toEqual('test');
});

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' });
  expect(wrapper.props().id).toEqual('foo');
});

it('renders ul by default', () => {
  const wrapper = wrap();
  expect(wrapper.find('ul')).toHaveLength(1);
});

it('renders ol when ordered prop is passed in', () => {
  const wrapper = wrap({ ordered: true });
  expect(wrapper.find('ol')).toHaveLength(1);
});
