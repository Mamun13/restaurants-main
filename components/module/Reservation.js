import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GiKnifeFork } from 'react-icons/gi';

export default function Reservation() {
  return (
    <>
      <section id='Reservation' className='reservation_bg' >
        <Container className='py-5'>
          <div className='text-center pt-4'>
            <GiKnifeFork className='theme_text_color' size={'40px'} />

            <h1 className='text-capitalize text-center service_title fw_400 '>
              reservation
            </h1>
            <p className='text-capitalize text-center'>
              <span className='position-relative service_subtitle theme_text_color fw-light'>
                book a table
              </span>
            </p>
          </div>
          <Row>
            <Col lg={3}>
              <div>
                <div className='mb-3'>
                  <label htmlFor='' className='form-label'>
                    Username
                  </label>
                  <input
                    type='text'
                    className='form-control username_form'
                    id=''
                    placeholder='Enter name'
                  />
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className='reser_form_one'>
                <label htmlFor='' className='form-label'>
                  Select Adult
                </label>
                <select
                  className='form-select rounded-0 select_form'
                  aria-label='Default select example'
                  defaultValue="option"
                >
                  <option value="option">Select adult</option>
                  <option value='1'>2 person</option>
                  <option value='2'>4 person</option>
                  <option value='3'>8 person</option>
                </select>
              </div>
            </Col>
            <Col lg={3}>
              <div>
                <div className='mb-3'>
                  <label htmlFor='' className='form-label'>
                    Reservation date
                  </label>
                  <input
                    type='date'
                    className='form-control reservation_date_form'
                    id=''
                    placeholder='Enter name'
                  />
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className='reser_form_one'>
                <label htmlFor='' className='form-label'>
                  Select Time
                </label>
                <select
                  className='form-select rounded-0 select_form'
                  aria-label='Default select example'
                  defaultValue="option"
                >
                  <option value="option">Select Time</option>
                  <option value='1'>09:00AM</option>
                  <option value='2'>02:00PM</option>
                  <option value='3'>08:00PM</option>
                </select>
              </div>
            </Col>
            <div className='d-flex justify-content-center mt-3'>
              <button className='button-48' role='button'>
                <span className='text text-uppercase'>book a table</span>
              </button>
            </div>
            <p className='text-center mt-4'> Booking request <span className='theme_text_color'>+ 00-123-123456</span>  or fill out the order form </p>
          </Row>
        </Container>
      </section>
    </>
  );
}
