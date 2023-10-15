import React from 'react'
import '../../styles/section/Testinomials.css'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import { useDataContext } from '../../Provider/DataProvider';

const Testimonials = () => {

  let data = useDataContext();
  let testinomial = data.testinomial;

  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Testimonials</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          navigation={false}
          pagination={{ clickable: true }}
          speed={600}
          slidesPerView='auto'
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >

          {
            testinomial.map((test, index) => {
              //console.log(test.name)
              return (
                <SwiperSlide>
                  <div className="testimonial-item" key={index}>
                    <img src={test.imageurl} className="testimonial-img" alt="" />
                    <h3>{test.name}</h3>
                    <h4>{test.position}</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      {test.review}
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>

                </SwiperSlide>
              )
            })
          }

        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials