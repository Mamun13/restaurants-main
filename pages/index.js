import Experience from '@/components/module/Experience';
import Hero from '../components/common/Hero';
import DefaultLayout from '../components/layouts/DefaultLayout';
import About from '../components/module/About';
import FoodMenu from '../components/module/FoodMenu';
import Reservation from '../components/module/Reservation';
import Service from '../components/module/Service';
// import Team from '../components/module/Team';
import Youtube from '../components/module/Youtube';
import Testimonial from '../components/module/Testimonial';
import Reviews from '../components/module/Reviews';
import InstagramPost from '../components/module/InstagramPost';
import TopButton from '../components/common/TopButton';
import Specialties from'../components/module/Specialties';
import Contact from '@/components/module/Contact';
import HeroNew from '@/components/common/HeroNew';

export default function Home() {
  return (
    <>
    {/* // <DefaultLayout title='Home | ARROWHEAD GRILL'> */}
      <HeroNew/>
      {/* <Hero /> */}
      <Reservation />
      <Experience/>
      {/* <Service /> */}
      <About />
      <FoodMenu />
      {/* <Youtube/> */}
      <Specialties/>
      {/* <Team /> */}
      <Reviews/>
      {/* <Testimonial /> */}
      <Contact/>
      <InstagramPost/>
      <TopButton/>
    {/* </DefaultLayout> */}
    </>
  );
}
