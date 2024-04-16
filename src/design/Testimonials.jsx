import People from "../Components/People";
import {  user2, user3, user4, user7, user8 } from "../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className=" w-full ">
       
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          631: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          521: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          536: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          414: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          352: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          614: {
            slidesPerView:1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <People
              profileimg={user2}
              name="Stella Gulding"
              review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio eveniet officiis sequi facilis quas saepe."
              date="20TH JUNE 2023"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <People
              profileimg={user3}
              name="Ella George Kanye"
              review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio eveniet officiis sequi facilis quas ."
              date="26TH JULY 2023"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <People
              profileimg={user4}
              name="Brain James"
              review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio eveniet officiis sequi ."
              date="7TH FEBUARY 2024"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <People
              profileimg={user7}
              name="Mrs Miguel Florence"
              review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio eveniet officiis sequi ."
              date="17TH FEBUARY 2024"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <People
              profileimg={user8}
              name="Fauzia Mohammed Larson"
              review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio eveniet officiis sequi ."
              date="17TH FEBUARY 2024"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
