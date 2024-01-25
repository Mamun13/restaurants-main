'use client';
import React from 'react';
import { Container } from 'react-bootstrap';

const ReadMore = () => {
  return (
    <>
      <section className='read_more_part'>
        <div className='read_more_banner position-relative'>
          <img
            src='/assets/images/read_more.png'
            alt=''
            className='read_more_banner_img'
          />
        </div>
        <Container>
          <div className='read_more_padding'>
            <h1 className='text-center mt-4 lh-1 px-3 pb-3 fw_400'>
              Arrowhead Grill <br /> Experience the art of authentic meat
              platter mastery.
            </h1>
            <p className='px-3 read_more_des pb-5'>
              Indulge in the culinary excellence of Arrowhead Grill, where the
              art of authentic meat platter mastery comes to life. Immerse
              yourself in a symphony of flavors as our skilled chefs craft a
              tantalizing array of premium cuts, expertly grilled to perfection.
              From succulent steaks to savory chops, each bite is a celebration
              of taste and texture. Elevate your dining experience at Arrowhead
              Grill, where passion for quality meets the mastery of meat.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ReadMore;
