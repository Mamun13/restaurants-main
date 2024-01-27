import Link from 'next/link';
import React, { Fragment, useEffect, useState, useCallback } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { useRouter } from 'next/router';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import Overlay from './Overlay'

export default function Navbar() {
  const router = useRouter();
  const { keyword } = router.query;
  const [scrollY, setScrollY] = useState(0);
  const [showItems, setShowItems] = useState(false);
  const [drop, setDrop] = useState('dropdown_items');

  const onScroll = useCallback((event) => {
    const { pageYOffset, scrollY } = window;
    setScrollY(window.pageYOffset);
    let scrollPosition = 20;
    if (scrollY > scrollPosition) {
      document.getElementById('Top').classList.add('sticky2');
    } else {
      document.getElementById('Top').classList.remove('sticky2');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true });
    };
  }, []);

  const onScroll3 = useCallback((event) => {
    const { pageYOffset, scrollY } = window;
    setScrollY(window.pageYOffset);
    let scrollPosition = 20;
    if (scrollY > scrollPosition) {
      document.getElementById("Top2").classList.add("sticky3");
    } else {
      document.getElementById("Top2").classList.remove("sticky3");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll3, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll3, { passive: true });
    };
  }, []);

  const handleMouseEnter = () => {
    setShowItems(true);
    setDrop(drop);
  };

  const handleMouseLeave = () => {
    setShowItems(false);
  };

  const handleClickService = () => {
    setShowItems(false);
    router.push('#FoodManu');
  };

  return (
    <>
      <div id='Top' className='overbanner2'>
        <nav className='navbar navbar-expand-lg navbar-dark px-4 px-lg-5 py-3 py-lg-0 '>
          {/* <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0 sticky-top shadow-sm'> */}
          <Nav.Link as={Link} href='/' className='navbar-brand p-2'>
            <img
              src='/assets/images/logo.png'
              style={{ maxHeight: 80, marginTop: 10, marginBottom: 5 }}
              alt='Logo'
            />
          </Nav.Link>

          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <div className='navbar-nav ms-auto py-0 pe-4'>
              <Nav className='me-auto'>
                <Nav.Link as={Link} href='/' className='fw_400'>
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  href='/#Experience'
                  scroll={false}
                  className='fw_400 nav-item nav-link sticky_text_color'
                >
                  experience
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  href='/#Discover'
                  scroll={false}
                  className='fw_400 nav-item nav-link sticky_text_color'
                >
                  discover
                </Nav.Link>
                <NavDropdown
                  className='p-0 rounded-0 about-btn dropdown_menu-7 '
                  title={
                    <div className='d-flex align-items-center '>
                      <span className='fw_400 position-relative text-uppercase text-light sticky_text_color text-inter font-16 d-flex align-items-center position-relative after_border'>
                        Menu
                      </span>
                      <BiChevronDown className='ms-1 text-white sticky_text_color' />
                    </div>
                  }
                  id='navbarScrollingDropdown'
                  onMouseEnter={() => handleMouseEnter()}
                  onMouseLeave={() => handleMouseLeave()}
                  // onClick={() => handleClickService()}
                  show={showItems}
                >
                  <NavDropdown.Item
                    as={Link}
                    href='/e-menu'
                    className='fw_400 cate-drop text-light sticky_text_color sticky_text_color2 text-capitalize text-dark px-4 py-2 d-block'
                  >
                    E-Menu
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  as={Link}
                  href='/about-us'
                  scroll={false}
                  className=' fw_400 nav-item nav-link sticky_text_color'
                >
                  about us
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  href='/#Contact'
                  scroll={false}
                  className='fw_400 nav-item nav-link sticky_text_color'
                >
                  Contact
                </Nav.Link>
              </Nav>
            </div>
            <div className='d-flex justify-content-start'>
              <Nav.Link
                as={Link}
                href='/#Reservation'
                scroll={false}
                className='button-48 px-3 py-2'
                role='button'
              >
                <span className='text text-uppercase font_14'>
                reservation now
                </span>
              </Nav.Link>
            </div>
          </div>
        </nav>
      </div>

      {/* for mobile responsive */}
       <section
          id="Top2"
          className="overbanner3"
        >
          <Container className="px-0">
            <div className="d-flex justify-content-between align-items-center main-manu-item">
              <div className="">
                <Link href="/">
                  <img
                    src='/assets/images/logo.png'
                    style={{ maxHeight: 80, marginTop: 10, marginBottom: 5 }}
                    alt='Logo'
                    className='responsive_logo'
                  />
                </Link>
              </div>

              <div className="d-flex align-items-center">
                <Overlay />
              </div>
            </div>
          </Container>
        </section>







    </>
  );
}
