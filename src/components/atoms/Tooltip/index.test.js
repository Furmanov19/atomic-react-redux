import React from 'react';
import { mount } from 'enzyme';
import Tooltip, { opposite, perpendicular, perpendicularAxis } from '.';

const wrap = (props = {}) =>
  mount(
    <Tooltip data-title="title" {...props}>
      <span>test</span>
    </Tooltip>
  );

it('renders with different props', () => {
  wrap({ align: 'start' });
  wrap({ align: 'end' });
});

it('renders children when passed in', () => {
  const wrapper = wrap();
  expect(wrapper.contains('test')).toBe(true);
});

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' });
  expect(wrapper.props().id).toEqual('foo');
});

it('renders data-title', () => {
  const wrapper = wrap();
  expect(wrapper.props()['data-title']).toEqual('title');
});

it('renders tabIndex', () => {
  const wrapper = wrap();
  expect(wrapper.props().tabIndex).toEqual(0);
});

test('opposite', () => {
  expect(opposite({ position: 'top' })).toBe('bottom');
  expect(opposite({ position: 'right' })).toBe('left');
  expect(opposite({ position: 'bottom' })).toBe('top');
  expect(opposite({ position: 'left' })).toBe('right');
});

test('perpendicular', () => {
  expect(perpendicular({ position: 'top' })).toBe('left');
  expect(perpendicular({ position: 'right' })).toBe('top');
  expect(perpendicular({ position: 'bottom' })).toBe('left');
  expect(perpendicular({ position: 'left' })).toBe('top');
});

test('perpendicularAxis', () => {
  expect(perpendicularAxis({ position: 'top' })).toBe('X');
  expect(perpendicularAxis({ position: 'right' })).toBe('Y');
  expect(perpendicularAxis({ position: 'bottom' })).toBe('X');
  expect(perpendicularAxis({ position: 'left' })).toBe('Y');
});
