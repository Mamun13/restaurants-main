import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const VertualMenu = () => {
  return (
    <>
      <section className=''>
        <div className='about_page_banner position-relative'>
          <img
            src='/assets/images/virtual-menu.jpg'
            alt=''
            className='about_page_banner_img'
          />
          <h1 className='about_page_title text-capitalize'>E-Menu</h1>
        </div>
        <Container>
          <Carousel>
            <Carousel.Item>
              <img
                src='/assets/images/menu1.jpeg'
                className='img-fluid vitualmenu_image'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src='/assets/images/menu2.jpeg'
                className='img-fluid vitualmenu_image'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src='/assets/images/menu3.jpeg'
                className='img-fluid vitualmenu_image'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src='/assets/images/menu4.jpeg'
                className='img-fluid vitualmenu_image'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src='/assets/images/menu5.jpeg'
                className='img-fluid vitualmenu_image'
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  );
};

export default VertualMenu;
