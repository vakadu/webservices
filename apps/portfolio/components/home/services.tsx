import { Swiper, SwiperSlide } from "swiper/react";

import { servicesSliderProps } from "@webservices/utils";
import { PortfolioSectionHeader } from "@webservices/ui";

const Services = () => {
    
    return(
        <section className="pb-[80px] bg-transparent bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F0EBE3_100%)] dark:bg-[linear-gradient(0deg,_#31363c_0%,_#222831_100%)]">
            <article className="max-w-[1300px] mx-auto">
                <PortfolioSectionHeader
                    title="what i do"
                />
                <section className="overflow-hidden px-16 lg:px-0">
                    <Swiper
                        {...servicesSliderProps}
                        className="w-full h-full swiper-container text-center"
                    >
                        <SwiperSlide 
                            className="flex justify-center items-center"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="300"
                        >
                            <div className="relative overflow-hidden px-30 py-35 rounded-[20px] bg-white">
                                <div className="text-13 font-semibold tracking-0.05 uppercase mb-24">
                                    <span> Web Development </span>
                                </div>
                                <h5 className="text-24 font-semibold">
                                    <span> React </span>
                                </h5>
                                <div className=" min-h-[134px] mt-24">
                                    <p>
                                        Building user interfaces and front-end components for web applications using React. 
                                        Writing efficient, reusable, and scalable code to implement the UI design and user interactions.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide 
                            className="flex justify-center items-center"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="400"
                        >
                            <div className="relative overflow-hidden px-30 py-35 rounded-[20px] bg-white">
                                <div className="text-13 font-semibold tracking-0.05 uppercase mb-24">
                                    <span> Mobile Development </span>
                                </div>
                                <h5 className="text-24 font-semibold">
                                    <span> React Native & Flutter</span>
                                </h5>
                                <div className="min-h-[134px] mt-24">
                                    <p>
                                        Using React Native and Flutter to build cross-platform mobile applications. 
                                        Write code once and create apps that run natively on both iOS and Android platforms.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>
            </article>
        </section>
    )
};

export default Services;
