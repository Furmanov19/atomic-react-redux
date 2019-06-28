import React from 'react';
import { mount } from 'enzyme';
import Input from '.';

const wrap = (props = {}) => mount(<Input {...props} />);

it('renders props when passed in', () => {
  const wrapper = wrap({ type: 'text' });
  expect(wrapper.props().type).toEqual('text');
});

it('renders input by default', () => {
  const wrapper = wrap();
  expect(wrapper.find('input')).toHaveLength(1);
});

it('renders select when type is select', () => {
  const wrapper = wrap({ type: 'select' });
  expect(wrapper.find('select')).toHaveLength(1);
});

it('renders textarea when type is textarea', () => {
  const wrapper = wrap({ type: 'textarea' });
  expect(wrapper.find('textarea')).toHaveLength(1);
});
