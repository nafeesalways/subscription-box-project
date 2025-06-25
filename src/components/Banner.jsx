
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="w-full py-12 bg-gradient-to-r rounded-lg from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Subscription Box Service Platform
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Discover new favorites every month — customize, subscribe, and enjoy curated products delivered to your doorstep.
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <img
              src="https://images.pexels.com/photos/8294651/pexels-photo-8294651.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Box 1"
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Explore Handpicked Surprises</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Each box delivers exclusive curated products you'll love.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <img
              src="https://images.pexels.com/photos/5082580/pexels-photo-5082580.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Box 2"
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Tailored to Your Taste</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Customize your box to suit your unique preferences.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <img
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Box 3"
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Unbox Happiness Monthly</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Enjoy surprises every month, delivered to your door.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <img
              src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Box 4"
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Perfect for Gifting</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Share the joy of subscription boxes with your loved ones.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <img
              src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
              alt="Box 5"
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Flexible & Easy</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Pause, skip, or cancel anytime. You're in control.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
 
  );
};

export default Banner;
