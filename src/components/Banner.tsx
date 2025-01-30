"use client";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { memo } from "react";
const Banner = memo(() => {
  const slides = [
    {
      banner:
        "https://img.lazcdn.com/us/domino/9c253ab8-1f42-4bcc-988d-801f077f3c4e_BD-1976-688.jpg_2200x2200q80.jpg",
    },
    {
      banner:
        "https://img.lazcdn.com/us/domino/39a6396b-50a6-4e5e-9caf-957e1b1f8533_BD-1976-688.jpg_2200x2200q80.jpg",
    },
    {
      banner:
        "https://img.lazcdn.com/us/domino/eb456825-b2fb-4f02-b2f4-cdd271b48e45_BD-1976-688.jpg_2200x2200q80.jpg",
    },
    {
      banner:
        "https://img.lazcdn.com/us/domino/3bfc1c08-3a3b-4137-9ba7-6fa85300a280_BD-1976-688.jpg_2200x2200q80.jpg",
    },
    {
      banner:
        "https://img.lazcdn.com/us/domino/c471b1b2-365c-42f8-bd9c-32a35c29b603_BD-1976-688.jpg_2200x2200q80.jpg",
    },
  ];

  return (
    <>
      <div className="container mx-auto xl:mt-20 mt-5 p-2 xl:px-36 overflow-hidden">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          speed={300}
          className="overflow-y-hidden h-full"
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slideContent.banner}
                width={2500}
                height={2500}
                alt=""
                priority
                quality={100}
                className="swiper-lazy object-cover"
              />
              {/* <div className="swiper-lazy-preloader"></div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
});

Banner.displayName = "Banner";
export default Banner;
