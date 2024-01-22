import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GiKnifeFork } from 'react-icons/gi';
import Link from 'next/link';

const Experience = () => {
  return (
    <>
      <section id='Experience' className='experience_bg'>
        <Container fluid className='experience_back'>
          <div className='mb-5 text-center'>
            <GiKnifeFork className='theme_text_color' size={'50px'} />
            <h1 className='text-capitalize text-center service_title fw_400'>
              our experience
            </h1>
            <p className='text-capitalize text-center'>
              <span className='position-relative service_subtitle theme_text_color fw-light'>
                why choose us
              </span>
            </p>
          </div>
          <Row>
            <Col lg={8} md={12}>
              <div className='d-flex align-content-center '>
                <Row className='d-flex align-items-center '>
                  <Col lg={6} md={6}>
                    <div>
                      <div>
                        <img
                          src='/assets/images/experi_banner3.jpg'
                          alt=''
                          className='img-fluid experience_img_one'
                        />
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div>
                      <img
                        src='/assets/images/experi_banner4.jpg'
                        alt=''
                        className='img-fluid experience_img_two'
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={4} md={12}>
              <div className='my-5'>
                <p className='mb-3 font_14 experience_des'>
                  Arrowhead Grill is a top choice for many discerning diners due
                  to its exceptional commitment to quality and service. Renowned
                  for its prime steaks, the restaurant sources the finest cuts
                  of meat, ensuring a memorable dining experience. The
                  combination of a sophisticated ambiance and attentive staff
                  further enhances the appeal, making Arrowhead Grill a go-to
                  destination for those seeking a refined culinary experience.
                </p>
                {/* <p className='mb-3'>
                  By night the scene is set for any and all occasions. From
                  intimate tables for two to small groups or larger private
                  events. Our unparalleled attention to detail and strong focus
                  on delivering the best culinary experiences is designed to
                  exceed expectations.
                </p> */}
                <p className='mb-3 mt-4 experience_booking'>Booking request</p>
                <p className='mb-5 phone_number experience_booking'>+00-123-123456</p>

                <div className='experience_reser_btn mt-3 '>
                  <Link
                    href='#Reservation'
                    scroll={false}
                    className='button-48'
                    role='button'
                  >
                    <span className='text text-uppercase'>
                      make reservation
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Experience;
