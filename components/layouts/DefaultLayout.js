import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Spinner from '../common/Spinner';
import Navbar from './Navbar';
import Footer from '../module/Footer';

const DefaultLayout = ({ children, title }) => {
  return (
    <div className='bg-white p-0'>
      <Head>
        <title>{title}</title>
      </Head>
      <Spinner />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

DefaultLayout.propTypes = {
  title: PropTypes.string,
};

export default DefaultLayout;
