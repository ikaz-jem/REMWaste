


import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlinePreview } from "react-icons/md";



export default function Products() {


const data = [
  {
    "title": "Digital Product Design",
    "img": "/assets/imgs/serv-icons/3.png",
    "desc": "Live workshop where we define the main problems and challenges before building a strategic plan moving forward.",
    "link": "/page-services-details"
  },
  {
    "title": "Web Developments",
    "img": "/assets/imgs/serv-icons/4.png",
    "desc": "Live workshop where we define the main problems and challenges before building a strategic plan moving forward.",
    "link": "/page-services-details"
  },
  {
    "title": "Branding Design",
    "img": "/assets/imgs/serv-icons/5.png",
    "desc": "Live workshop where we define the main problems and challenges before building a strategic plan moving forward.",
    "link": "/page-services-details"
  },
  {
    "title": "UI-UX Design",
    "img": "/assets/imgs/serv-icons/5.png",
    "desc": "Live workshop where we define the main problems and challenges before building a strategic plan moving forward.",
    "link": "/page-services-details"
  }
]



  const swiperOptions = {
    modules: [Navigation],
    loop: true,
    spaceBetween: 40,
    slidesPerView: 3,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },

    navigation: {
      nextEl: 'text-white text-5xl',
      prevEl: 'text-white text-5xl',
    },
  };
  return (
    <section className="services section-padding flex">
      <div className="container">
        
        <div
          className="flex"
        >
          <Swiper
            {...swiperOptions}
            className="flex gap-5 w-full"
            
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className=" border border-neutral-200 p-5 rounded">
                  <div className="">
                    <MdOutlinePreview className="text-3xl text-neutral-100" />
                  </div>
                  <h5 className="mb-15 text-white">{item.title}</h5>
                  <p className='text-white'>{item.desc}</p>
                  <a href={item.link} className="rmore mt-30">
                    <span className="sub-title">Read More</span>
                    <img
                      src="/assets/imgs/arrow-right.png"
                      alt=""
                      className="icon-img-20 ml-5"
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

