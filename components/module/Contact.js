import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GiKnifeFork } from 'react-icons/gi';

const Contact = () => {
  return (
    <>
      <section id='Contact' className='contact_section'>
        <Container fluid>
          <div className='text-center pb-4'>
            <GiKnifeFork className='theme_text_color' size={'40px'} />

            <h1 className='text-capitalize text-center service_title fw_400'>
              location
            </h1>
            <p className='text-capitalize text-center'>
              <span className='position-relative service_subtitle theme_text_color fw-light'>
                visit our place
              </span>
            </p>
          </div>
          <Row>
            <Col lg={6} className='p-0'>
              <div className='contact_details position-relative d-flex justify-content-center align-items-center'>
                <div className='text-center location_contact_part pb-5'>
                  <div>
                    <h1 className='text-capitalize text-center service_title fw_400'>
                      visit
                      <br /> delicious restaurants
                    </h1>
                    <p className='text-capitalize text-center'>
                      <span className='position-relative service_subtitle theme_text_color'>
                        right here waiting
                      </span>
                    </p>
                  </div>
                  <div className='pt-4'>
                    <p className='text-capitalize m-0'>booking request</p>
                    <h1 className='theme_text_color fw-normal font_50'>
                      +000 123 123456
                    </h1>
                    <h2 className=' fw-normal text-capitalize'>address</h2>
                    <p className='text-capitalize m-0'>
                      Buffet Lounge Mirpur 12,Trust Trouser Ltd.
                      <br /> Dhaka 1216
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src='/assets/images/ex_leaf.png'
                    className='visit_bg_img'
                  />
                </div>
              </div>
            </Col>
            <Col lg={6} className='p-0'>
              <div>
                <iframe src='//maps.google.com/maps?q=53.3381768,-6.2613077&z=15&output=embed' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
