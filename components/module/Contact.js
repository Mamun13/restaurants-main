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
            <Col lg={6} md={6} className='p-0'>
              <div className='contact_details position-relative d-flex justify-content-center align-items-center'>
                <div className='text-center location_contact_part pb-5'>
                  <div>
                    <h1 className='text-capitalize text-center service_title fw_400'>
                      visit
                      <br /> Arrowhead Grill
                    </h1>
                    <p className='text-capitalize text-center'>
                      <span className='position-relative service_subtitle theme_text_color'>
                        right here waiting
                      </span>
                    </p>
                  </div>
                  <div className='pt-4'>
                    <p className='text-capitalize m-0'>booking request</p>
                    <h1 className='theme_text_color contact_number fw-normal font_50'>
                      +880 1885-837125
                    </h1>
                    <h2 className=' fw-normal text-capitalize'>address</h2>
                    <div className=' d-flex justify-content-center '>
                      <p className='text-capitalize m-0 w-50 contact_address'>
                        House: 32 (Level-4), Road: 11, Block: G, Banani,
                        Dhaka-1213, Opposite of Yellow, same building as Coffee
                        World.
                      </p>
                    </div>
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
            <Col lg={6} md={6} className='p-0'>
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
