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
                <h1 className='text-capitalize perfect_title px-3 pb-5'>
                  the perfect place <br />
                  for an exceptional experience
                </h1>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <p className='text-capitalize font_14'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
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
            <p className='pe-4 mb-0 phone_number'>+00-123-123456</p>
            <p className='mb-5 pe-4'>Booking request</p>
              <div className='d-flex justify-content-end mt-3 pe-4'>
                <button className='button-48' role='button'>
                  <span className='text text-uppercase'>make reservation</span>
                </button>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PerfactPlace;
