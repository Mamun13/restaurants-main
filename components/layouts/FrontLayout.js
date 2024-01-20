import React, { useEffect } from 'react';
// import { Layout, Space } from 'antd';
import PropTypes from 'prop-types';
import Head from 'next/head';
// import HeaderContent from '../Header';
// import FooterContent from '../Footer';
// const { Content, Footer, Header } = Layout;
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
// import { setUserLogout } from '../../store/slices/authSlice';

const FrontLayout = ({ children, title, layoutBG }) => {

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        // direction='vertical'
        // style={{
        //   width: '100%',
        // }}
        // size={[0, 48]}
      >
        <div className={layoutBG}>
          <header className='headerBG' style={{ padding: 0 }}>
            {/* <HeaderContent /> */}
          </header>
          <div
            className='front-content'
            style={{
              margin: '10px 10px',
              padding: 10,
              minHeight: ' calc(100vh - 150px)',
            }}
          >
            {children}
          </div>
          <footer className='footerBG'>
            {/* <FooterContent /> */}
          </footer>
        </div>
      </div>
    </>
  );
};

FrontLayout.defaultProps = {
  title: '',
};

FrontLayout.propTypes = {
  title: PropTypes.string,
};

export default FrontLayout;
