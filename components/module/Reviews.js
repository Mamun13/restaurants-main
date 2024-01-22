import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { GiKnifeFork } from 'react-icons/gi';

export default function Testimonial() {
  return (
    <section className='review_part py-5 py-md-3'>
      <div className='container-xxl py-5 py-md-3 wow fadeInUp' data-wow-delay='0.1s'>
        <div className='container'>
          <div className='text-center mb-3'>
            <GiKnifeFork className='theme_text_color' size={'40px'} />
          </div>
          <div className='text-center'>
            <h5 className='section-title ff-secondary text-center text-primary fw-normal'>
              Reviews
            </h5>
            <h1 className='mb-5 mb-md-0 fw_400'>They All Love Our Food</h1>
          </div>
          <div className=''>
            <Carousel>
              <Carousel.Item>
                <div className='testimonial-item bg-transparent rounded p-4 text-center'>
                  <i className='fa fa-quote-left fa-2x text-primary mb-3' />
                  <p>"Amazing taste, and juicy steaks!! Best ever!!"</p>
                  <div>
                    <img
                      className='img-fluid flex-shrink-0 rounded-circle'
                      src='/assets/images/testimonial-1.jpg'
                      style={{ width: 50, height: 50 }}
                    />
                    <div className='d-flex justify-content-center'>
                      <div className='ps-3 text-center'>
                        <h5 className='mb-1 fw_400'>mamun</h5>
                        <small>Software Engineer</small>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='testimonial-item bg-transparent rounded p-4 text-center'>
                  <i className='fa fa-quote-left fa-2x text-primary mb-3' />
                  <p>"Amazing taste, and juicy steaks!! Best ever!!"</p>
                  <div>
                    <img
                      className='img-fluid flex-shrink-0 rounded-circle'
                      src='/assets/images/testimonial-2.jpg'
                      style={{ width: 50, height: 50 }}
                    />
                    <div className='d-flex justify-content-center'>
                      <div className='ps-3 text-center'>
                        <h5 className='mb-1 fw_400'>mamun</h5>
                        <small>Software Engineer</small>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='testimonial-item bg-transparent rounded p-4 text-center'>
                  <i className='fa fa-quote-left fa-2x text-primary mb-3' />
                  <p>"Amazing taste, and juicy steaks!! Best ever!!"</p>
                  <div>
                    <img
                      className='img-fluid flex-shrink-0 rounded-circle'
                      src='/assets/images/testimonial-3.jpg'
                      style={{ width: 50, height: 50 }}
                    />
                    <div className='d-flex justify-content-center'>
                      <div className='ps-3 text-center'>
                        <h5 className='mb-1 fw_400'>mamun</h5>
                        <small>Software Engineer</small>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='testimonial-item bg-transparent rounded p-4 text-center'>
                  <i className='fa fa-quote-left fa-2x text-primary mb-3' />
                  <p>"Amazing taste, and juicy steaks!! Best ever!!"</p>
                  <div>
                    <img
                      className='img-fluid flex-shrink-0 rounded-circle'
                      src='/assets/images/testimonial-4.jpg'
                      style={{ width: 50, height: 50 }}
                    />
                    <div className='d-flex justify-content-center'>
                      <div className='ps-3 text-center'>
                        <h5 className='mb-1 fw_400'>mamun</h5>
                        <small>Software Engineer</small>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
