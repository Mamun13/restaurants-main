import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { GiKnifeFork } from 'react-icons/gi';

export default function Testimonial() {
  return (
    <section className='review_part py-5 py-md-3'>
      <div
        className='container-xxl py-5 py-md-3 wow fadeInUp'
        data-wow-delay='0.1s'
      >
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
                <div className='review-item bg-transparent rounded p-4 text-center'>
                  <i className='fa fa-quote-left fa-2x text-primary mb-3' />
                  <p className='review_des_line'>
                    "A great place for meat lovers with platters that are
                    absolutely worth it. We had the El Dorado platter and it was
                    delicious and filling. The meats were well cooked to the
                    right temperature that we wanted, recommend medium rare for
                    the steaks. The accompaniments of sauces and sides were also
                    tasty. The cream of mushroom soup as a starter was a
                    surprisingly scrumptious pick. Service staff were friendly
                    and attended to us quickly. Was not too busy for a weekend
                    lunch. Recommended, especially if you want to embrace your
                    inner carnivore."
                  </p>
                  <div>
                    <img
                      className='img-fluid flex-shrink-0 rounded-circle'
                      src='/assets/images/testimonial-3.png'
                      style={{ width: 50, height: 50 }}
                    />
                    <div className='d-flex justify-content-center'>
                      <div className='ps-3 text-center'>
                        <h5 className='mb-1 fw_400 pt-3'> Shahriar Ratul</h5>
                        {/* <small>Software Engineer</small> */}
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='review-item bg-transparent rounded p-4 text-center'>
                  <i className='fa fa-quote-left fa-2x text-primary mb-3' />
                  <p className='review_des_line'>
                    "Good atmosphere with better quality services also food
                    tests are great. Recommend visit some times. Also mamun vai
                    was so friendly."
                  </p>
                  <div>
                    <img
                      className='img-fluid flex-shrink-0 rounded-circle'
                      src='/assets/images/demo.png'
                      style={{ width: 50, height: 50, objectFit: 'cover' }}
                    />
                    <div className='d-flex justify-content-center'>
                      <div className='ps-3 text-center'>
                        <h5 className='mb-1 fw_400 pt-3'>Kiyas Ahan </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='review-item bg-transparent rounded p-4 text-center'>
                  <i className='fa fa-quote-left fa-2x text-primary mb-3' />
                  <p className='review_des_line'>
                    "Super super good food. Loved each and every item they
                    served. Also the sides and sauce were amazing as well.
                    Astonishing service. Special gratitude to Mr. Zihad, who
                    coordinated our dinner and ensured we had a pleasant
                    experience! "
                  </p>
                  <div>
                    <img
                      className='img-fluid flex-shrink-0 rounded-circle'
                      src='/assets/images/demo.png'
                      style={{ width: 50, height: 50, objectFit: 'cover' }}
                    />
                    <div className='d-flex justify-content-center'>
                      <div className='ps-3 text-center'>
                        <h5 className='mb-1 fw_400 mt-3'>Fahiim Shahriar Shovon</h5>
                        {/* <small>Software Engineer</small> */}
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
