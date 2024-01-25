import { useRef, Fragment, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiChevronDown, BiAlignLeft } from 'react-icons/bi';
import Nav from 'react-bootstrap/Nav';

function Overlay() {
  const [showItems, setShowItems] = useState(false);

  const overlayRef = useRef();

  const openSearch = () => {
    overlayRef.current.style.width = '100%';
  };

  const closeSearch = () => {
    overlayRef.current.style.width = '0%';
  };

  // const handleClickService = () => {
  //   setShowItems(false);
  //   // router.push("/");
  // };

  // const handleMouseEnter = () => {
  //   setShowItems(true);
  //   setDrop(drop);
  // };
  return (
    <Fragment>
      <div className='main'>
        <button onClick={openSearch} className='open-button me-3'>
          <FaBars className='font-24 res_icons' size={'25px'} />
        </button>
      </div>

      <div ref={overlayRef} className='overlay'>
        <button className='close-button' onClick={closeSearch}>
          &times;
        </button>
        <div className='overlay-content text-uppercase font-24 fw-semibold'>
          <ul className='lh-lg text-center list-unstyled font-20'>
            <li className='text-center'>
              <Link as={Link} href='/' className='fw_400 res_font_size'>
                Home
              </Link>
            </li>

            <li>
              <Link
                as={Link}
                href='/#Experience'
                scroll={false}
                className='fw_400 res_font_size'
              >
                experience
              </Link>
            </li>
            <li>
              <Link
                as={Link}
                href='/#Discover'
                scroll={false}
                className='fw_400 res_font_size'
              >
                discover
              </Link>
            </li>
            <li className='d-flex justify-content-center'>
              <NavDropdown
                className='p-0 rounded-0 about-btn dropdown_menu-7 '
                title={
                  <div className='d-flex align-items-center '>
                    <span className='fw_400 res_font_size '>
                      Menu
                    </span>
                    <BiChevronDown className='ms-1 text-white sticky_text_color' />
                  </div>
                }
              >
                <NavDropdown.Item
                  as={Link}
                  href='/e-menu'
                  className='fw_400 res_font_size overlay_emenu'
                >
                  E-Menu
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li>
              <Link
                as={Link}
                href='/about-us'
                scroll={false}
                className=' fw_400 res_font_size'
              >
                about us
              </Link>
            </li>
            <li>
              <Link
                as={Link}
                href='/#Contact'
                scroll={false}
                className='res_font_size fw_400'
              >
                Contact
              </Link>
            </li>
            <li className='for_responsive'>
              <div className='d-flex justify-content-center'>
                <Nav.Link
                  as={Link}
                  href='/#Reservation'
                  scroll={false}
                  className='button-48 px-3 py-2 overlay_reser_btn  font_14 '
                  role='button'
                >
                  <span className='text-uppercase'>
                    make reservation
                  </span>
                </Nav.Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Overlay;
