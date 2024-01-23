import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GiKnifeFork } from 'react-icons/gi';

const PerfactPlace = () => {
  return (
    <>
      <section className='perfect_place'>
        <Container>
          <div className='text-center py-4 '>
            <GiKnifeFork className='theme_text_color' size={'40px'} />

            <h1 className='text-capitalize text-center service_title fw_400 '>
              perfect place
            </h1>
            <p className='text-capitalize text-center'>
              <span className='position-relative service_subtitle theme_text_color fw-light'>
                the place you need
              </span>
            </p>
          </div>
          <Row>
            <Col lg={6}>
              <div>
                <h1 className='text-capitalize perfect_title px-3 pb-5 ps-md-0 pe-md-5'>
                  the perfect place <br />
                  for an exceptional experience
                </h1>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <p className='text-capitalize font_14'>
                  Indulge your senses at Arrowhead Grill, where culinary
                  excellence meets inviting ambiance. Immerse yourself in a
                  world of flavors crafted with precision and served with a
                  touch of sophistication. Join us for an extraordinary dining
                  journey that goes beyond the ordinary – a truly exceptional
                  experience awaits at Arrowhead Grill.
                </p>
              </div>
            </Col>
            <div className='d-flex align-items-center perfect_images'>
              <div className='px-3 w-50'>
                <img
                  src='/assets/images/experi_banner2.jpg'
                  className='img-fluid perfect_img_one px-4'
                />
              </div>
              <div className='px-3 w-50'>
                <div>
                  <img
                    src='/assets/images/perfect_st.png'
                    className='img-fluid perfect_img_two px-4'
                  />
                </div>
              </div>
            </div>
            <div className='pt-5 text-end'>
              <p className='pe-4 mb-0 phone_number'>+880 1885-837125</p>
              <p className='mb-5 pe-4'>Booking request</p>
              <div className='d-flex justify-content-end mt-3 pe-4'>
                <Link href='/#Reservation' className='button-48' role='button'>
                  <span className='text text-uppercase'>make reservation</span>
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PerfactPlace;
