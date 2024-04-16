import Jobs from "../Components/Jobs";
import {
  amazon,
  dribble,
  facebook,
  google,
  netflix,
  walmart,
} from "../assets/assets";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



const Plans = () => {
  return (
    <div className=" max-w-[90%]  space-y-7">
      <h3 className=" text-xl font-semibold exo ">
        {" "}
        Popular Latest{" "}
        <span className=" gradient-t bg-clip-text text-transparent">Jobs</span>
      </h3>
      <>
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
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            521: {
              slidesPerView: 1.7,
              spaceBetween: 10,
            },
          536: {
              slidesPerView: 1.7,
              spaceBetween: 10,
            },
          414: {
              slidesPerView: 1.3,
              spaceBetween: 10,
            },
          352: {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },
          320: {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },
          480: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            614: {
              
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            }
          }}
          modules={[ Pagination ]}
          className="mySwiper"
          
          
        > 

       
          <SwiperSlide>
            <Jobs
              image={google}
              jobtitle="UX Researcher"
              location="New York, $23K"
              time="2 Days Ago"
              company="Google"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Jobs
              image={dribble}
              jobtitle="Web Developer"
              location="Houston, $15K"
              time="1 Week Ago"
              company="Dribble"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Jobs
              image={netflix}
              jobtitle="UI Designer"
              location="Online, $20K"
              time="1 Day Ago"
              company="Netflix"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Jobs
              image={walmart}
              jobtitle="Database Programmer"
              location="Accra, $55K"
              time="6 Days Ago"
              company="Walmart"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Jobs
              image={amazon}
              jobtitle="App Designer"
              location="Remote, $23K"
              time="2 Days Ago"
              company="Amazon"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Jobs
              image={facebook}
              jobtitle="Digital Marketer"
              location="Remote/Online, $17K"
              time="5 Days Ago"
              company="Facebook"
            />
          </SwiperSlide>
        </Swiper>
      </>
      </div>
  );
};

export default Plans;
