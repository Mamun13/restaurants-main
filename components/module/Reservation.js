import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GiKnifeFork } from 'react-icons/gi';
// import DateTimePicker from 'react-datetime-picker';
// import 'react-datetime-picker/dist/DateTimePicker.css';
// import 'react-calendar/dist/Calendar.css';
// import 'react-clock/dist/Clock.css';

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Reservation() {
  // const [value, onChange] = useState(new Date());
  return (
    <>
      <section id='Reservation' className='reservation_bg'>
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
          <Row className='d-flex justify-content-center'>
            <Col lg={3} md={6}>
              <div>
                <div className='mb-3'>
                  <label htmlFor='' className='form-label'>
                    Username<span> *</span>
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
            <Col lg={3} md={6}>
              <div>
                <div className='mb-3'>
                  <label htmlFor='' className='form-label'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='form-control username_form'
                    id=''
                    placeholder='Enter name'
                  />
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div>
                <div className='mb-3'>
                  <label htmlFor='' className='form-label'>
                    Phone Number <span> *</span>
                  </label>
                  <input
                    type='number'
                    className='form-control username_form'
                    id=''
                    placeholder='Enter name'
                  />
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className='mb-3 reser_form_one'>
                <label htmlFor='' className='form-label'>
                  Select Adult<span> *</span>
                </label>
                <select
                  className='form-select rounded-0 select_form'
                  aria-label='Default select example'
                  defaultValue='option'
                >
                  <option value='option'>Select adult</option>
                  <option value='1'>2 person</option>
                  <option value='2'>4 person</option>
                  <option value='3'>8 person</option>
                  <option value='4'>10 person</option>
                  <option value='5'>12 person</option>
                  <option value='6'>14 person</option>
                </select>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div>
                <div className='mb-3 reser_form_one'>
                  <label htmlFor='' className='form-label'>
                    Reservation date<span> *</span>
                  </label>
                  <input
                    type='datetime-local'
                    className='form-control reservation_date_form'
                    id=''
                    placeholder='Enter name'
                  />
                </div>
              </div>
            </Col>

           

            <div className='d-flex justify-content-center mt-3'>
              <button className='button-48' role='button'>
                <span className='text text-uppercase'>book a table</span>
              </button>
            </div>
            <p className='text-center mt-4'>
              Booking request
              <span className='theme_text_color'>+880 1885-837125 </span> or
              fill out the order form
            </p>
          </Row>
        </Container>
      </section>
    </>
  );
}
