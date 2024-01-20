import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import { GiKnifeFork } from 'react-icons/gi';
import SpecialData from '../../data/SpecialData';

const Specialties = () => {
  const [spdata] = useState(SpecialData);

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className='py-5 specialties_section'>
        <Container fluid>
          <div className='text-center pb-5'>
            <GiKnifeFork className='theme_text_color' size={'40px'} />

            <h1 className='text-capitalize text-center service_title fw_400'>
              best specialties
            </h1>
            <p className='text-capitalize text-center'>
              <span className='position-relative service_subtitle theme_text_color fw-light'>
                special offer
              </span>
            </p>
          </div>
          <Slider {...settings}>
            {spdata.map((item, index) => (
              <div key={index} className={`text-center ${index % 2 === 0 ? `mt-5` : ``}`}>
                <div className=''>
                  <div>
                    <img
                      src={item.image}
                      alt=''
                      className='specialties_img px-3'
                    />
                  </div>
                  <div>
                    <h2 className='text-capitalize font_32'>{item.name}</h2>
                    <p className='fw-light px-3 font_14'>{item.description}</p>
                    <p className='theme_text_color font_24'>${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default Specialties;
