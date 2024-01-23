import React from 'react';
import { LuChefHat } from 'react-icons/lu';
import { GiHotMeal } from 'react-icons/gi';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { Ri24HoursLine } from 'react-icons/ri';
import { GiKnifeFork } from 'react-icons/gi';
import Link from 'next/link';

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <section id='Footer'>
      <div
        className='container-fluid bg-dark text-light footer pt-5 wow fadeIn'
        data-wow-delay='0.1s'
      >
        <div className='container py-5'>
          <div className='row g-5'>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <h4 className='section-title ff-secondary text-start text-primary fw-normal mb-4'>
                Company
              </h4>
              {/* <div className='footer_mobile_res'> */}
              <div className='text-center'>
                <Link className='btn btn-link' href=''>
                  About Us
                </Link>
                <Link className='btn btn-link' href=''>
                  Contact Us
                </Link>
                <Link className='btn btn-link' href=''>
                  Reservation
                </Link>
                <Link className='btn btn-link' href=''>
                  Privacy Policy
                </Link>
                <Link className='btn btn-link' href=''>
                  Terms &amp; Condition
                </Link>
              </div>
            </div>
            {/* </div> */}
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <h4 className='section-title ff-secondary text-start text-primary fw-normal mb-4'>
                Contact
              </h4>
              <div className='m-0 d-flex align-items-center'>
                <i className='fa fa-map-marker-alt me-3' />
                <p>
                  House: 32 (Level-4), Road: 11,<br></br>
                  Block: G, Banani, Dhaka-1213
                </p>
              </div>
              <p className='mb-2'>
                <i className='fa fa-phone-alt me-3' />
                +𝟴𝟴𝟬𝟭𝟴𝟴𝟱𝟴𝟯𝟳𝟭𝟮𝟱
              </p>
              <p className='mb-2'>
                <i className='fa fa-envelope me-3' />
                arrowheadgrillbd@gmail.com
              </p>
              <div className='d-flex pt-2'>
                {/* <a className='btn btn-outline-light btn-social' href=''>
                <i className='fab fa-twitter' />
              </a> */}
                <Link
                  className='btn btn-outline-light btn-social'
                  target='_blank'
                  href='https://www.facebook.com/arrowheadgrilbd/'
                >
                  <i className='fab fa-facebook-f' />
                </Link>
                <Link
                  className='btn btn-outline-light btn-social'
                  target='_blank'
                  href='https://www.youtube.com/@arrowheadgrill'
                >
                  <i className='fab fa-youtube' />
                </Link>
                <Link
                  className='btn btn-outline-light btn-social'
                  target='_blank'
                  href='https://www.instagram.com/arrowhead_grill_bd/'
                >
                  <i className='fab fa-instagram' />
                </Link>
              </div>
            </div>
            <div className='col-lg-2 col-md-6 col-sm-6'>
              <h4 className='section-title ff-secondary text-start text-primary fw-normal mb-4'>
                Opening
              </h4>
              <p className='text-light fw-normal font_14'>Monday - Sunday</p>
              <p className='font_14'>12:00 PM - 11:30 PM</p>
              {/* <p className='text-light fw-normal font_14'>Friday</p>
              <p className='font_14'>10 AM - 10 PM</p> */}
            </div>
            <div className='col-lg-3 col-md-6'>
              <h4 className='section-title ff-secondary text-capitalize text-start text-primary fw-normal mb-4'>
                our service
              </h4>
              <div className='position-relative'>
                <div className='d-flex align-items-center'>
                  <div className='newsletter_icon_details position-relative d-flex justify-content-center align-items-center rounded-pill'>
                    <LuChefHat className='' size={'20px'} />
                  </div>
                  <p className='text-capitalize ps-3 font_14'>master chef</p>
                </div>

                <div className='d-flex align-items-center'>
                  <div className='newsletter_icon_details position-relative d-flex justify-content-center align-items-center rounded-pill'>
                    <GiHotMeal className='' size={'20px'} />
                  </div>
                  <p className='text-capitalize ps-3 font_14'>Quality Food</p>
                </div>

                <div className='d-flex align-items-center'>
                  <div className='newsletter_icon_details position-relative d-flex justify-content-center align-items-center rounded-pill'>
                    <MdOutlineAddShoppingCart className='' size={'20px'} />
                  </div>
                  <p className='text-capitalize ps-3 font_14'>Online Order</p>
                </div>

                
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='copyright'>
            <div className='row'>
              <div className='col-md-6 text-center text-md-start mb-3 mb-md-0'>
                {year} ©{' '}
                <Link className='border-bottom' href='#'>
                  arrowheadgrillbd.com
                </Link>
                , All Right Reserved.
                <br />
              </div>
              <div className='col-md-6 text-center text-md-end'>
                <div className='footer-menu'>
                  <Link href=''>Home</Link>
                  <Link href=''>Cookies</Link>
                  <Link href=''>Help</Link>
                  <Link href=''>FQAs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
