import Link from 'next/link';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { GiKnifeFork } from 'react-icons/gi';
import { LiaGlassMartiniAltSolid } from 'react-icons/lia';

export default function Testimonial() {
  return (
    <section className='testimonial'>
      <div className='container-xxl py-5 wow fadeInUp' data-wow-delay='0.1s'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7 col-md-7'>
              <Carousel>
                <Carousel.Item>
                  <div
                    className='testimonial-item d-flex align-items-center justify-content-center rounded text-center theme_bg_color1'
                    // style={{ height: 500 }}
                  >
                    <img src='/assets/images/test_place.jpg' className='img-fluid testi_image'/>
                   
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div
                    className='testimonial-item d-flex align-items-center justify-content-center rounded text-center theme_bg_color1'
                    // style={{ height: 500 }}
                  >
                    <img src='/assets/images/test_place1.jpg' className='img-fluid testi_image'/>
                   
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div
                    className='testimonial-item d-flex align-items-center justify-content-center rounded text-center theme_bg_color1'
                    // style={{ height: 500 }}
                  >
                    <img src='/assets/images/test_place2.jpg' className='img-fluid testi_image'/>
                   
                  </div>
                </Carousel.Item>
                
              </Carousel>
            </div>
            <div className='col-lg-5 col-md-5'>
              <div
                className='ps-5 text-center d-flex align-items-center justify-content-center testi_party'
                // style={{ height: 500 }}
              >
                <div className=''>
                  <div className='mb-3'>
                    <LiaGlassMartiniAltSolid
                      className='theme_text_color'
                      size={'50px'}
                    />
                  </div>  
                  <div className=''>
                    <h1 className='pb-3 fw_400 about_title_des display-1 text-capitalize'>
                      looking for a party venue?
                    </h1>
                    <p className='text-uppercase text-center'>
                      <span className='position-relative service_subtitle theme_text_color fw-light'>
                        weekend offers
                      </span>
                    </p>
                    <div className='d-flex justify-content-center mt-3'>
                      <Link href="/#Reservation" className='button-48' role='button'>
                        <span className='text text-uppercase'>
                          make reservation
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
