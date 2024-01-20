import React from 'react';
import { Container } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <section className='about_page'>
      <div className='about_page_banner position-relative'>
        <img
          src='/assets/images/about_page.png'
          alt=''
          className='about_page_banner_img'
        />
        <h1 className='about_page_title text-capitalize'>about us</h1>
      </div>
    </section>
  );
};

export default AboutPage;
