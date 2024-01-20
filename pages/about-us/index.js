
import React from 'react';
import AboutPage from '../../components/module/AboutPage';
import Testimonial from '../../components/module/Testimonial'
import Service from '../../components/module/Service'
import Youtube from '../../components/module/Youtube'
import PerfactPlace from '@/components/module/PerfactPlace';

const index = () => {
  return (
    <>
      <AboutPage/>
      <Testimonial/>
      <Service/>
      <PerfactPlace/>
      <Youtube/>
    </>
  );
};
export default index;