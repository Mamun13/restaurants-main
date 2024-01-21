// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';

// // import './styles.css';

// // import required modules
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// export default function App() {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <>
     
//         style={{
//           '--swiper-navigation-color': '#fff',
//           '--swiper-pagination-color': '#fff',
//         }}
//         loop={true}
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
//         </SwiperSlide>
//         <div class="swiper-container gallery-top">
//     <div class="swiper-wrapper">
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-1.jpg)"></div>
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-2.jpg)"></div>
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-3.jpg)"></div>
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-4.jpg)"></div>
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-5.jpg)"></div>
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-6.jpg)"></div>
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-7.jpg)"></div>
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-8.jpg)"></div>
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-9.jpg)"></div>
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-10.jpg)"></div>
//     </div>
//     {/* <!-- Add Arrows --> */}
//     <div class="swiper-button-next swiper-button-white"></div>
//     <div class="swiper-button-prev swiper-button-white"></div>
//   </div>
//   <div class="swiper-container gallery-thumbs">
//     <div class="swiper-wrapper">
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-1.jpg)"></div>
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-2.jpg)"></div>
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-3.jpg)"></div>
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-4.jpg)"></div>
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-5.jpg)"></div>
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-6.jpg)"></div>
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-7.jpg)"></div>
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-8.jpg)"></div>
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-9.jpg)"></div>
//       <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-10.jpg)"></div>
//     </div>
//   </div>
//     </>
//   );
// }
