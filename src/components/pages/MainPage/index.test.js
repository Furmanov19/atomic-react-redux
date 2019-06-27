import MainPage from '.';
import React from 'react';
import { mount } from 'enzyme';

describe('MainPage test =>', () => {
  it('renders', () => {
    mount(<MainPage />);
  });
});
