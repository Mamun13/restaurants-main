
import React from 'react';
import AboutPage from '../../components/module/AboutPage';
import Testimonial from '../../components/module/Testimonial'
import Service from '../../components/module/Service'
import Youtube from '../../components/module/Youtube'
import PerfactPlace from '@/components/module/PerfactPlace';
import TopButton from '@/components/common/TopButton';

const index = () => {
  return (
    <>
      <AboutPage/>
      <Testimonial/>
      <Service/>
      <PerfactPlace/>
      <Youtube/>
      <TopButton/>
    </>
  );
};
export default index;