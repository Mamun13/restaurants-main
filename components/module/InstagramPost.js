import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FiPlus } from 'react-icons/fi';
import { PiInstagramLogoLight } from 'react-icons/pi';
import Link from 'next/link'

const InstagramPost = () => {
  return (
    <>
      <section>
        <Container fluid className='p-0 m-0'>
          <div className='d-flex justify-content-center p-0 m-0'>
            <div className='d-flex justify-content-center p-0 m-0'>
              <Col lg={4} md={4} className='p-0 m-0'>
                <div className=''>
                  <img
                    src='/assets/images/insta_one.jpg'
                    className='insta_post img-fluid'
                  />
                </div>
              </Col>
              <Col lg={4}  md={4}>
                <div className='position-relative '>
                  <Row className='p-0 m-0 marge_padding'>
                    <Col lg={6} md={4}>
                      <div
                        className='on_hover'
                        style={{ position: 'relative' }}
                      >
                        <img
                          src='/assets/images/insta_post1.jpg'
                          className='all_insta_posts img-fluid'
                        />
                        <div className='overlyBox d-flex justify-content-center align-items-center p-4'>
                          <div className='sec_border'>
                            <FiPlus size={'40px'} />
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} md={4}>
                      <div
                        className='on_hover'
                        style={{ position: 'relative' }}
                      >
                        <img
                          src='/assets/images/insta_post2.jpg'
                          className='all_insta_posts img-fluid'
                        />
                        <div className='overlyBox d-flex justify-content-center align-items-center p-4'>
                          <div className='sec_border'>
                            <FiPlus size={'40px'} />
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} md={4}>
                      <div
                        className='on_hover'
                        style={{ position: 'relative' }}
                      >
                        <img
                          src='/assets/images/insta_post3.jpg'
                          className='all_insta_posts img-fluid'
                        />
                        <div className='overlyBox d-flex justify-content-center align-items-center p-4'>
                          <div className='sec_border'>
                            <FiPlus size={'40px'} />
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} md={4}>
                      <div
                        className='on_hover'
                        style={{ position: 'relative' }}
                      >
                        <img
                          src='/assets/images/insta_post4.jpg'
                          className='all_insta_posts img-fluid'
                        />
                        <div className='overlyBox d-flex justify-content-center align-items-center p-4'>
                          <div className='sec_border'>
                            <FiPlus size={'40px'} />
                          </div>
                        </div>
                      </div>
                    </Col>
                    <div className='insta_icon_bg d-flex justify-content-center align-items-center'>
                      <Link href="#" className='text-decoration-none insta_icon'>
                        <PiInstagramLogoLight size={"40px"}/>
                      </Link>
                    </div>
                  </Row>
                </div>
              </Col>
              <Col lg={4} md={4} className='p-0 m-0'>
                <div className=''>
                  <img
                    src='/assets/images/insta_two.jpg'
                    className='insta_post img-fluid'
                  />
                </div>
              </Col>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default InstagramPost;
