import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <section id='Discover'>
      <div className='container-xxl py-5'>
        <div className='container'>
          <div className='row g-5 align-items-center'>
            <div className='col-lg-6'>
              <div className='row g-3'>
                <div className='col-6 text-start'>
                  <img
                    className='img-fluid rounded w-100 wow zoomIn'
                    data-wow-delay='0.1s'
                    src='/assets/images/discover1.jpg'
                  />
                </div>
                <div className='col-6 text-start'>
                  <img
                    className='img-fluid rounded w-75 wow zoomIn'
                    data-wow-delay='0.3s'
                    src='/assets/images/discover2.jpg'
                    style={{ marginTop: '25%' }}
                  />
                </div>
                <div className='col-6 text-end'>
                  <img
                    className='img-fluid rounded w-75 wow zoomIn'
                    data-wow-delay='0.5s'
                    src='/assets/images/discover3.jpg'
                  />
                </div>
                <div className='col-6 text-end'>
                  <img
                    className='img-fluid rounded w-100 wow zoomIn'
                    data-wow-delay='0.7s'
                    src='/assets/images/discover4.jpg'
                  />
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <h5 className='section-title ff-secondary text-start text-primary fw-normal'>
                Discover
              </h5>
              <h1 className='mb-4 fw_400'>
                Welcome to <i className='fa fa-utensils iconColor me-2' />
                Arrowhead Grill
              </h1>
              <p className='mb-4'>
                Welcome to Arrowhead Grill, where culinary excellence meets a
                warm and inviting atmosphere. Indulge in a dining experience
                that combines the finest cuts of meat with expertly crafted
                flavors. Our commitment to quality and attention to detail
                ensures each dish is a masterpiece. Join us for a memorable
                journey of gastronomic delight at Arrowhead Grill – where
                passion for food meets unparalleled service.
              </p>
             
              <div className='d-flex justify-content-start mt-3'>
                <Link href='/read-more' className='button-48' role='button'>
                  <span className='text text-uppercase'>read more</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
