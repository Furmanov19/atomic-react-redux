import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'styled-theme';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: 1fr 2fr 2fr 1fr;
  grid-gap: 2px;
  grid-template-areas:
    'header header header'
    'sidebar main main'
    'sidebar main main'
    'footer footer footer';
  min-height: 100vh;
`;
const Header = styled.header`
  border: 1px solid black;
  grid-area: header;
`;
const Sidebar = styled.aside`
  border: 1px solid black;
  grid-area: sidebar;
`;
const Main = styled.main`
  border: 1px solid black;
  grid-area: main;
`;
const Footer = styled.footer`
  border: 1px solid black;
  grid-area: footer;
`;

const PageTemplate = ({ header, sidebar, main, footer, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Sidebar>{sidebar}</Sidebar>
      <Main>{main}</Main>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
};

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  sidebar: PropTypes.node.isRequired,
  main: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired
};

export default PageTemplate;
