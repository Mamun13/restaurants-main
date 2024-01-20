import React, { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [windowHeight, setWindowHeight] = useState(0);
  const videoPlayerRef = useRef();

  let resizeWindow = () => {
    setWindowHeight(videoPlayerRef.current.clientHeight);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  return (
    <div className='py-5 bg-dark hero-header videoPlayer' ref={videoPlayerRef}>
      {/* <video
        autoPlay={true}
        loop={true}
        muted={true}
        width='100%'
        height='100%'
      >
        <source src='/video/horse-racing-slow.webm' type='video/webm' />
      </video> */}
      <div className='container my-5 py-5'>
        <div className='row align-items-center g-5'>
          <div className='col-lg-6 text-center text-lg-start'>
            <h1 className='display-1 text-white animated pt-0 slideInLeft m-0 fw_400'>
              Enjoy Our
            </h1>
            <h1 className='display-1 text-white animated slideInLeft m-0 fw_400'>
              Delicious Meal
            </h1>
            <p className='text-white animated slideInLeft mb-4 pb-2'>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <a
              href=''
              className='btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft'
            >
              Book A Table
            </a>
          </div>
          <div className='col-lg-6 text-center text-lg-end overflow-hidden'>
            <img className='img-fluid' src='/assets/images/hero.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
