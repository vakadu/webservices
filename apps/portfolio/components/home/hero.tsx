import TextLoop from "react-text-loop";

import { useScrollTo } from "@webservices/hooks";
import { Button } from "@webservices/ui";

const Hero = () => {
    const { handleScroll } = useScrollTo();

    return(
        <section className="pb-[80px] bg-transparent bg-[linear-gradient(0deg,_#FFFFFF_0%,_#F0EBE3_100%)] dark:bg-[linear-gradient(0deg,_#31363c_0%,_#222831_100%)]">
            <article className="min-h-screen flex items-center max-w-[1300px] mx-auto px-16 md:px-24">
                <section className="relative pt-[120px] w-full">
                    <article className="text-center md:text-left">
                        <section className="max-w-[740px] mb-[420px] lg:mb-0">
                            <h4 
                                className="text-14 md:text-15 uppercase tracking-0.10 dark:text-white font-jost"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <span>
                                    Hello, <b className="text-brand">My Name is</b>
                                </span>
                            </h4>
                            <h1 
                                className="font-jost text-[40px] leading-[32px] md:text-90 uppercase tracking-0.05 md:leading-[90px] mt-15 title-shadow text-white font-bold"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="100"
                            >
                                <span>
                                    <b className="text-brand">Vinod</b>
                                </span>
                            </h1>
                            {/* <h1 
                                className="font-jost text-[40px] leading-[32px] md:text-90 uppercase tracking-0.05 md:leading-[90px] mt-15 title-shadow text-white font-bold"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="100"
                            >
                                <span>
                                    Kumar
                                </span>
                            </h1> */}
                            <h4 
                                className="text-14 md:text-15 uppercase font-medium tracking-0.05 flex items-center mt-32 justify-center lg:justify-start font-jost"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="200"
                            >
                                <TextLoop>
                                    <span className="font-jost text-24 md:text-32 ml-12 text-brand dark:text-white">Frontend Developer</span>
                                    <span className="font-jost text-24 md:text-32 ml-12 text-brand dark:text-white">App Developer</span>
                                </TextLoop>
                            </h4>
                        </section>
                        <section className="lg:max-w-xs py-40">
                            <article
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="300"
                            >
                                <p className="text-14 md:text-18">
                                    Creating Awesome Apps and Websites. Your Vision, Brought to Life by Me.
                                </p>
                            </article>
                        </section>
                        <section
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="400"
                        >
                            <Button
                                className="relative shadow-1 font-semibold transition-all duration-0.7 ease-smooth-header style-btn"
                                uppercase
                                shape="circle"
                                variant="ghost"
                                color="black"
                                onClick={() => window.open('https://res.cloudinary.com/dovja5zeh/image/upload/v1688226800/Vinod_Kumar_Resume_o4qeho.pdf')}
                            >
                                <span className="z-3">download cv</span>
                            </Button>
                            <a 
                                className="uppercase btn btn-link pl-0 pt-40 lg:pt-0 lg:pl-72 block lg:inline-block"
                                onClick={() => handleScroll("experience")}
                            >
                                Experience
                            </a>
                        </section>
                    </article>
                    <article className="absolute scale-50 lg:scale-90 bottom-0 top-[680px] lg:top-1/2 right-auto -ml-[340px] left-1/2 lg:left-auto lg:-right-[40px] w-[680px] h-[800px] -mt-[390px] z-[2] origin-top-center">
                        <span className="absolute left-0 bottom-0 w-[680px] h-[680px] rounded-full bg-brand"/>
                        <div className="absolute z-5 top-[420px] -left-[120px]">
                            <ul className="m-0 p-0 list-none">
                                <li className="m-0 flex items-center text-black border-[2px] border-dark-bg dark:border-grey-dark-shade rounded-full h-[82px] w-[250px] px-20 justify-center mt-[160px] ml-[100px] shadow-1 bg-white dark:bg-dark-bg">
                                    <span className="block text-[38px] w-[50%] text-center leading-[20px] dark:text-white">6 <strong>+</strong></span>
                                    <span className="w-[50%] uppercase text-13 leading-[20px] dark:text-white font-semibold">Years of <strong className="text-brand">Experience</strong></span>
                                </li>
                            </ul>
                        </div>
                    </article>
                </section>
            </article>
        </section>
    )
};

export default Hero;
