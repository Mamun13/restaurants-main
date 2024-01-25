import React from 'react';
import { LuChefHat } from 'react-icons/lu';
import { GiHotMeal } from 'react-icons/gi';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { Ri24HoursLine } from 'react-icons/ri';
import { GiKnifeFork } from 'react-icons/gi';

export default function Service() {
  return (
    <section id='Services' className='services_part py-5'>
      <div className='container-xxl pb-5'>
        <div className='container'>
          <div className='text-center'>
            <GiKnifeFork className='theme_text_color' size={'50px'} />
            <h1 className='text-capitalize text-center service_title fw_400'>
              our services
            </h1>
            <p className='text-capitalize text-center'>
              <span className='position-relative service_subtitle theme_text_color fw-light'>
                why choose us
              </span>
            </p>
          </div>

          <div className='row g-4'>
            <div
              className='col-lg-3 col-sm-6 wow fadeInUp'
              data-wow-delay='0.1s'
            >
              <div className='text-center rounded pt-3'>
                <div className='p-4 service_mobile_res'>
                  <div className='d-flex justify-content-center'>
                    <div className='icon_details position-relative d-flex justify-content-center align-items-center rounded-pill'>
                      <LuChefHat className='' size={'40px'} />
                    </div>
                  </div>

                  <h5 className='mt-4 fw_400'>Master Chefs</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div
              className='col-lg-3 col-sm-6 wow fadeInUp'
              data-wow-delay='0.1s'
            >
              <div className='text-center rounded pt-3'>
                <div className='p-4 service_mobile_res'>
                  <div className='d-flex justify-content-center'>
                    <div className='icon_details position-relative d-flex justify-content-center align-items-center rounded-pill'>
                      <GiHotMeal className='' size={'40px'} />
                    </div>
                  </div>

                  <h5 className='mt-4 fw_400'>Quality Food</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>

            <div
              className='col-lg-3 col-sm-6 wow fadeInUp'
              data-wow-delay='0.1s'
            >
              <div className='text-center rounded pt-3'>
                <div className='p-4 service_mobile_res'>
                  <div className='d-flex justify-content-center'>
                    <div className='icon_details position-relative d-flex justify-content-center align-items-center rounded-pill'>
                      <MdOutlineAddShoppingCart className='' size={'40px'} />
                    </div>
                  </div>

                  <h5 className='mt-4 text-capitalize fw_400'>online order</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div
              className='col-lg-3 col-sm-6 wow fadeInUp'
              data-wow-delay='0.1s'
            >
              <div className='text-center rounded pt-3'>
                <div className='p-4 service_mobile_res'>
                  <div className='d-flex justify-content-center'>
                    <div className='icon_details position-relative d-flex justify-content-center align-items-center rounded-pill'>
                      <Ri24HoursLine className='' size={'40px'} />
                    </div>
                  </div>

                  <h5 className='mt-4 text-capitalize fw_400'>24/7 Service</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
