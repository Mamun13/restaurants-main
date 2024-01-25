'use client';
import React from 'react';
import { Container } from 'react-bootstrap';

const ReadMore = () => {
  return (
    <>
      <section className='read_more'>
        <div className='read_more_banner position-relative'>
          <img
            src='/assets/images/read_more.png'
            alt=''
            className='read_more_banner_img'
          />
        </div>
        <Container>
          <h1 className='text-center mt-4 lh-1 px-3 pb-3'> 
            Arrowhead Grill <br/> Experience the art of authentic meat platter
            mastery.
          </h1>
          <p className='px-3 text-justify read_more_des'>
            Indulge in the culinary excellence of Arrowhead Grill, where the art
            of authentic meat platter mastery comes to life. Immerse yourself in
            a symphony of flavors as our skilled chefs craft a tantalizing array
            of premium cuts, expertly grilled to perfection. From succulent
            steaks to savory chops, each bite is a celebration of taste and
            texture. Elevate your dining experience at Arrowhead Grill, where
            passion for quality meets the mastery of meat.
          </p>
        </Container>
      </section>
    </>
  );
};

export default ReadMore;
