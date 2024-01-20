import Head from 'next/head';
import React from 'react';
import { Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const AuthLayout = ({ children, title }) => {
  return (
    <div className='authWrapper'>
      <Head>
        <title>{title}</title>
      </Head>
      <Row
        type='flex'
        justify='center'
        align='middle'
        style={{ minHeight: '100vh' }}
      >
        <Col sm={{ span: 24 }} md={{ span: 8 }}>
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <img
              style={{ width: 150 }}
              src='/images/logo-white.png'
              alt='Logo'
            />
          </div>
          {children}
          <div className='authFooterLinks'>
            <ul>
              <li>
                <Link href='/'>Privacy Policy</Link>
              </li>
              <li>
                <Link href='/'>Terms</Link>
              </li>
              <li>
                <Link href='/'>Disclaimer</Link>
              </li>
              <li>
                <Link href='/'>Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AuthLayout;
