import React from 'react';
import { mount } from 'enzyme';
import Button from '.';
import { MemoryRouter } from 'react-router';

const wrap = (props = {}) => mount(<Button {...props} />);

it('renders with different combination of props', () => {
  wrap({ disabled: true });
  wrap({ transparent: true });
  wrap({ disabled: true, transparent: true });
});

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' });
  expect(wrapper.props().children).toEqual('test');
});

it('renders props when passed in', () => {
  const wrapper = wrap({ type: 'submit' });
  expect(wrapper.props().type).toEqual('submit');
});

it('renders button by default', () => {
  const wrapper = wrap();
  expect(wrapper.find('button')).toHaveLength(1);
});

it('renders anchor when href is passed in', () => {
  const wrapper = wrap({ href: 'test' });
  expect(wrapper.find('a')).toHaveLength(1);
});

it('renders Link when to is passed in', () => {
  const newWrap = (props = {}) =>
    mount(
      <MemoryRouter initialEntries={['/']}>
        <Button {...props} />
      </MemoryRouter>
    );
  const wrap = newWrap({ to: 'test' });
  expect(wrap.find('Link')).toHaveLength(1);
});
