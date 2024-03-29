import React, { useState } from 'react';
import CartApi from '../../data/Data';
import Link from 'next/link';
import { IoFastFoodSharp } from 'react-icons/io5';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';

export default function FoodMenu() {
  const [style, setStyle] = useState();
  const [movieData, setmovieData] = useState(CartApi.slice(0, 8));
  const [tab, setTab] = useState('all');

  const filterItem = (category) => {
    const updatedList = CartApi.filter((curElem) => {
      return curElem.category === category;
    });
    setmovieData(updatedList);
  };

  const handleTabChange = (t) => {
    setTab(t);
  };

  return (
    <section id='FoodManu'>
      <div className='container-xxl py-5'>
        <div className='container'>
          <div className='text-center wow fadeInUp' data-wow-delay='0.1s'>
            <h5 className='section-title ff-secondary text-center text-primary fw-normal'>
              Food Menu
            </h5>
            <h1 className='fw_400'>Most Popular Items</h1>
          </div>
        </div>

        <div className='container-fluid'>
          <div className='d-flex justify-content-center filter_border mb-5'>
            <div className='col-lg-12'>
              <div className='d-flex justify-content-center text-center py-4'>
                <span className='d-flex pb-3'>
                  <button
                    className={`d-flex align-items-center text-start text-light filter_menu_list border-0 bg-transparent position-relative food_tab_active px-4 position-relative `}
                    onClick={() => {
                      filterItem('starters');
                      handleTabChange('starters');
                    }}
                  >
                    <div className='food_tab_active'>
                      <span
                        className={`filter_menu_font fw-light font_14 m-0 ${
                          tab === 'starters' ? 'onclick_active' : '' //dinner to starters
                        } `}
                      >
                        STARTERS
                      </span>
                    </div>
                  </button>

                  <button
                    className={`d-flex align-items-center filter_menu_list text-start text-light border-0 bg-transparent position-relative food_tab_active px-4 position-relative `}
                    onClick={() => {
                      filterItem('soup');
                      handleTabChange('soup');
                    }}
                  >
                    <div className='food_tab_active'>
                      <span
                        className={`filter_menu_font fw-light font_14 m-0 ${
                          tab === 'soup' ? 'onclick_active' : ''
                        } `}
                      >
                        SOUP
                      </span>
                    </div>
                  </button>

                  <button
                    className={`d-flex align-items-center text-start filter_menu_list text-light border-0 bg-transparent position-relative food_tab_active px-4 position-relative`}
                    onClick={() => {
                      filterItem('table_top');
                      handleTabChange('table_top');
                    }}
                  >
                    <div className='food_tab_active'>
                      <span
                        className={`filter_menu_font fw-light font_14 m-0 ${
                          tab === 'table_top' ? 'onclick_active' : '' //lunch to  table
                        } `}
                      >
                        TABLE TOP
                      </span>
                    </div>
                  </button>

                  <button
                    className={`d-flex align-items-center text-start filter_menu_list text-light border-0 bg-transparent position-relative food_tab_active px-4 position-relative`}
                    onClick={() => {
                      filterItem('steak');
                      handleTabChange('steak'); //morning to steak
                    }}
                  >
                    <div className='food_tab_active'>
                      <span
                        className={`fw-light filter_menu_font font_14 m-0 ${
                          tab === 'steak' ? 'onclick_active' : ''
                        } `}
                      >
                        STEAK
                      </span>
                    </div>
                  </button>

                  <button
                    className={`d-flex align-items-center text-start filter_menu_list text-light border-0 bg-transparent position-relative food_tab_active px-4 position-relative `}
                    onClick={() => {
                      filterItem('special_chicken');
                      handleTabChange('special_chicken');
                    }}
                  >
                    <div className='food_tab_active'>
                      <span
                        className={`filter_menu_font fw-light font_14 m-0 ${
                          tab === 'special_chicken' ? 'onclick_active' : ''
                        } `}
                      >
                        CHICKEN
                      </span>
                    </div>
                  </button>

                  <button
                    className={`d-flex align-items-center text-start filter_menu_list text-light border-0 bg-transparent position-relative food_tab_active px-4 position-relative `}
                    onClick={() => {
                      filterItem('mocktails');
                      handleTabChange('mocktails');
                    }}
                  >
                    <div className='food_tab_active'>
                      <span
                        className={`filter_menu_font fw-light font_14 m-0 ${
                          tab === 'mocktails' ? 'onclick_active' : ''
                        } `}
                      >
                        MOCKTAILS
                      </span>
                    </div>
                  </button>

                  {/* <div>
                    <select
                      className='form-select rounded-0'
                      aria-label='Default select example'
                    >
                      <option selected>Open this select menu</option>
                      <option value='1'>
                        {' '}
                        <button
                          className={`d-flex align-items-center text-start text-light border-0 bg-transparent position-relative food_tab_active px-4 position-relative `}
                          onClick={() => {
                            filterItem('mocktails');
                            handleTabChange('mocktails');
                          }}
                        >
                          <div className='food_tab_active'>
                            <span
                              className={`filter_menu_font fw-light font_14 m-0 ${
                                tab === 'mocktails' ? 'onclick_active' : ''
                              } `}
                            >
                              MOCKTAILS
                            </span>
                          </div>
                        </button>
                      </option>
                      <option value='2'>Two</option>
                      <option value='3'>Three</option>
                    </select>
                  </div> */}
                </span>
              </div>
            </div>
          </div>
          
          {/* for responsive menu items */}
          <div className='mobile_menu_item_btn'>
            <div className='d-flex justify-content-center mt-5 mb-4 mobile_menu_hover'>
              <Dropdown>
                <Dropdown.Toggle className='px-5 py-2' id='dropdown-basic'>
                  Menu Items
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className='menu_list_items_color'>
                    <button
                      className={`d-flex align-items-center text-start text-dark filter_menu_list border-0 bg-transparent position-relative food_tab_active px-4 position-relative `}
                      onClick={() => {
                        filterItem('starters');
                        handleTabChange('starters');
                      }}
                    >
                      <div className='food_tab_active'>
                        <span
                          className={`filter_menu_font fw-light font_14 m-0 ${
                            tab === 'starters' ? 'onclick_active' : '' //dinner to starters
                          } `}
                        >
                          STARTERS
                        </span>
                      </div>
                    </button>
                  </Dropdown.Item>
                  <Dropdown.Item className='menu_list_items_color'>
                    <button
                      className={`d-flex align-items-center filter_menu_list text-start border-0 bg-transparent position-relative food_tab_active px-4 position-relative `}
                      onClick={() => {
                        filterItem('soup');
                        handleTabChange('soup');
                      }}
                    >
                      <div className='food_tab_active'>
                        <span
                          className={`filter_menu_font fw-light font_14 m-0 ${
                            tab === 'soup' ? 'onclick_active' : ''
                          } `}
                        >
                          SOUP
                        </span>
                      </div>
                    </button>
                  </Dropdown.Item>
                  <Dropdown.Item className='menu_list_items_color'>
                    <button
                      className={`d-flex align-items-center text-start filter_menu_list border-0 bg-transparent position-relative food_tab_active px-4 position-relative`}
                      onClick={() => {
                        filterItem('table_top');
                        handleTabChange('table_top');
                      }}
                    >
                      <div className='food_tab_active'>
                        <span
                          className={`filter_menu_font fw-light font_14 m-0 ${
                            tab === 'table_top' ? 'onclick_active' : '' //lunch to  table
                          } `}
                        >
                          TABLE TOP
                        </span>
                      </div>
                    </button>
                  </Dropdown.Item>
                  <Dropdown.Item className='menu_list_items_color'>
                    <button
                      className={`d-flex align-items-center text-start filter_menu_list border-0 bg-transparent position-relative food_tab_active px-4 position-relative`}
                      onClick={() => {
                        filterItem('steak');
                        handleTabChange('steak'); //morning to steak
                      }}
                    >
                      <div className='food_tab_active'>
                        <span
                          className={`fw-light filter_menu_font font_14 m-0 ${
                            tab === 'steak' ? 'onclick_active' : ''
                          } `}
                        >
                          STEAK
                        </span>
                      </div>
                    </button>
                  </Dropdown.Item>
                  <Dropdown.Item className='menu_list_items_color'>
                    <button
                      className={`d-flex align-items-center text-start filter_menu_list border-0 bg-transparent position-relative food_tab_active px-4 position-relative `}
                      onClick={() => {
                        filterItem('special_chicken');
                        handleTabChange('special_chicken');
                      }}
                    >
                      <div className='food_tab_active'>
                        <span
                          className={`filter_menu_font fw-light font_14 m-0 ${
                            tab === 'special_chicken' ? 'onclick_active' : ''
                          } `}
                        >
                          CHICKEN
                        </span>
                      </div>
                    </button>
                  </Dropdown.Item>
                  <Dropdown.Item className='menu_list_items_color'>
                    <button
                      className={`d-flex align-items-center text-start filter_menu_list border-0 bg-transparent position-relative food_tab_active px-4 position-relative `}
                      onClick={() => {
                        filterItem('mocktails');
                        handleTabChange('mocktails');
                      }}
                    >
                      <div className='food_tab_active'>
                        <span
                          className={`filter_menu_font fw-light font_14 m-0 ${
                            tab === 'mocktails' ? 'onclick_active' : ''
                          } `}
                        >
                          MOCKTAILS
                        </span>
                      </div>
                    </button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div className='row'>
            {movieData?.map((curElement, index) => {
              return (
                <div key={index} className='col-lg-6 col-md-6 food_manu_border'>
                  <div className='d-flex justify-content-start align-items-center my-4 px-5 px-md-3 pad_res'>
                    <div>
                      <img
                        src={curElement.image}
                        alt=''
                        className='food_manu_img me-3'
                      />
                    </div>
                    <div className='ms-3'>
                      <div className='d-flex justify-content-between mb-3 filter_border'>
                        <Link
                          href='#'
                          className='fw_400 text-capitalize menu_title'
                        >
                          {/* <h4 className='fw_400 foodmanu_title'> */}
                          {curElement.name}
                          {/* </h4> */}
                        </Link>
                        <h4 className='theme_text_color fw_400 menu_price'>
                          {' '}
                          BDT. {curElement.price}
                        </h4>
                      </div>
                      <p className='card-text text-secondary f-3 font_14 text-light fw_400 menu_descr'>
                        {curElement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className='text-center pt-5 font_14 fw-light'>
              <p>
                During winter daily from{' '}
                <span className='theme_text_color'> 8:30</span> am to{' '}
                <span className='theme_text_color'>9:00 </span>pm
              </p>
            </div>
            <div className='d-flex justify-content-center mt-4'>
              <Link href='/e-menu' className='button-48' role='button'>
                <span className='text text-uppercase'>view our e-manu</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
