import React from 'react';

import YoutubeModel from './YoutubeModel';
import { Container } from 'react-bootstrap';

export default function Testimonial() {
  return (
    <section className='youtube_bg'>
      <div className='container'>
        <h1 className='text-capitalize text-center service_title fw_400 mb-5'>
          the best experience
        </h1>
        <Container>
          <div className='row'>
            <div className='col-lg-4 col-md-4'>
              <div className='d-flex justify-content-center'>
                <div>
                  <div className='d-flex justify-content-center align-items-center position-relative'>
                    <div className='play_btn d-flex justify-content-center align-items-center'>
                      <YoutubeModel/>
                    </div>
                  </div>
                  <p className='text-capitalize pt-4'>
                    <span className='position-relative service_subtitle theme_text_color fw-light'>
                      video one
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4'>
              <div className='d-flex justify-content-center'>
                <div>
                  <div className='d-flex justify-content-center align-items-center position-relative'>
                    <div className='play_btn d-flex justify-content-center align-items-center'>
                      <YoutubeModel />
                    </div>
                  </div>
                  <p className='text-capitalize pt-4'>
                    <span className='position-relative service_subtitle theme_text_color fw-light'>
               video two
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4'>
              <div className='d-flex justify-content-center'>
                <div>
                  <div className='d-flex justify-content-center align-items-center position-relative'>
                    <div className='play_btn d-flex justify-content-center align-items-center'>
                      <YoutubeModel />
                    </div>
                  </div>
                  <p className='text-capitalize pt-4'>
                    <span className='position-relative service_subtitle theme_text_color fw-light'>
                       video three
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
