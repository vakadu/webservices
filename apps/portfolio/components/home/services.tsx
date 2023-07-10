import { Swiper, SwiperSlide } from "swiper/react";

import { servicesSliderProps } from "@webservices/utils";

const Services = () => {
    
    return(
        <section className="pb-[80px] bg-transparent bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F0EBE3_100%)] dark:bg-[linear-gradient(0deg,_#31363c_0%,_#222831_100%)]">
            <div>
                <div className="max-w-[1300px] mx-auto">
                    <div className="text-center">
                        <h2 className="text-32 leading-[32px] lg:text-42 lg:leading-42 tracking-0.07 font-semibold uppercase mb-24">
                            what i do
                        </h2>
                        {/* <div className="uppercase">
                            <span className="text-16 text-brand font-semibold">my</span>
                            <b className="font-jost ml-10 text-18">services</b>
                        </div> */}
                    </div>
                </div>
            </div>
            <div>
                <div className="max-w-[1300px] mx-auto overflow-hidden px-16">
                    <Swiper
                        {...servicesSliderProps}
                        pagination
                        className="w-full h-full swiper-container text-center"
                    >
                        <SwiperSlide className="flex justify-center items-center">
                            <div className="relative overflow-hidden px-30 py-35 rounded-[20px] bg-white">
                                <div className="text-13 font-semibold tracking-0.05 uppercase mb-24">
                                    <span> Web Development </span>
                                </div>
                                <h5 className="text-24 font-semibold">
                                    <span> React </span>
                                </h5>
                                <div className=" min-h-[134px] mt-24">
                                    <div>
                                        Building user interfaces and front-end components for web applications using React. 
                                        Writing efficient, reusable, and scalable code to implement the UI design and user interactions.
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center items-center">
                            <div className="relative overflow-hidden px-30 py-35 rounded-[20px] bg-white">
                                <div className="text-13 font-semibold tracking-0.05 uppercase mb-24">
                                    <span> Mobile Development </span>
                                </div>
                                <h5 className="text-24 font-semibold">
                                    <span> React Native & Flutter</span>
                                </h5>
                                <div className=" min-h-[134px] mt-24">
                                    <div>
                                        Using React Native and Flutter to build cross-platform mobile applications. 
                                        Write code once and create apps that run natively on both iOS and Android platforms.
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
};

export default Services;
