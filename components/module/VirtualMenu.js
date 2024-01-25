import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const VertualMenu = () => {
  return (
    <>
      <section className='e_menu'>
        <div className='about_page_banner position-relative'>
          <img
            src='/assets/images/virtual-menu.jpg'
            alt=''
            className='about_page_banner_img'
          />
          <h1 className='about_page_title text-capitalize'>E-Menu</h1>
        </div>
        <Container>
          <div className='mb-3'>
            <Row>
              <Col lg={4} md={4} sm={6}>
                <div className='d-flex justify-content-center'>
                  <img
                    src='/assets/images/menu1.jpeg'
                    alt=''
                    className='img-fluid e_menu_img'
                  />
                </div>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <div className='d-flex justify-content-center'>
                  <img
                    src='/assets/images/menu2.jpeg'
                    alt=''
                    className='img-fluid e_menu_img'
                  />
                </div>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <div className='d-flex justify-content-center'>
                  <img
                    src='/assets/images/menu3.jpeg'
                    alt=''
                    className='img-fluid e_menu_img'
                  />
                </div>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <div className='d-flex justify-content-center'>
                  <img
                    src='/assets/images/menu4.jpeg'
                    alt=''
                    className='img-fluid e_menu_img'
                  />
                </div>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <div className='d-flex justify-content-center'>
                  <img
                    src='/assets/images/menu5.jpeg'
                    alt=''
                    className='img-fluid e_menu_img'
                  />
                </div>
              </Col>
            </Row>
          </div>
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
