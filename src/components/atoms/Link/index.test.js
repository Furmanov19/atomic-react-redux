import React from 'react';
import { mount } from 'enzyme';
import Link from '.';
import { MemoryRouter } from 'react-router';

const wrap = (props = {}) =>
  mount(
    <MemoryRouter initialEntries={['/']}>
      <Link {...props} />
    </MemoryRouter>
  );

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' });
  expect(wrapper.find('a').props().children).toEqual('test');
});

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' });
  expect(wrapper.find('a').props().id).toEqual('foo');
});

it('renders anchor by default', () => {
  const wrapper = wrap();
  expect(wrapper.find('a')).toHaveLength(1);
});

it('renders Link when prop to is passed in', () => {
  const wrapper = wrap({ to: 'test' });
  expect(wrapper.find('NavLink')).toHaveLength(1);
});
