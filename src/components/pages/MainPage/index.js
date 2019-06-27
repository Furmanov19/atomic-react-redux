import React from 'react';

import { PageTemplate, Header, SideBar, Main, Footer } from 'components';

const HomePage = () => {
  return (
    <PageTemplate
      header={<Header />}
      sidebar={<SideBar />}
      main={<Main />}
      footer={<Footer />}
    />
  );
};

export default HomePage;
