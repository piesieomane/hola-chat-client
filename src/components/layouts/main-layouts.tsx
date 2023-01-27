import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import LoginPage from '../auth/login';

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}

      {/* <Footer /> */}
      {/* //if authorized can send them to the main page
      {/* <LoginPage /> */}
    </>
  );
};

export default MainLayout;
