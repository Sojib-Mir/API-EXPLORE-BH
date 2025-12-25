import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1000",
      title: "Nature's Freshness",
      sub: "Explore the green world for your home.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=1000",
      title: "Indoor Plants",
      sub: "Bring the garden inside your room.",
    },

    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000",
      title: "Vertical Gardens",
      sub: "Perfect solution for small spaces.",
    },
  ];

  return (
    <div className="h-75 md:h-150 w-full">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper h-full w-full rounded-2xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full flex items-center justify-center bg-cover bg-center rounded-2xl "
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0"></div>

              <div className="relative text-center  px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg text-pink-500">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 opacity-90 italic">
                  {slide.sub}
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-xl">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
