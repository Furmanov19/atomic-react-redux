import React from 'react';
import { mount, shallow } from 'enzyme';
import PageTemplate from '.';

describe('PageTemplate test =>', () => {
  const mountedPage = mount(
    <PageTemplate
      header="header"
      sidebar="sidebar"
      main="main"
      footer="footer"
    />
  );

  it('renders header', () => {
    expect(mountedPage.contains('header')).toBe(true);
  });

  it('renders sidebar', () => {
    expect(mountedPage.contains('sidebar')).toBe(true);
  });

  it('renders main', () => {
    expect(mountedPage.contains('main')).toBe(true);
  });

  it('renders footer', () => {
    expect(mountedPage.contains('footer')).toBe(true);
  });
});
