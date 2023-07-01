import { LinkedinIcon, TwitterIcon } from "@webservices/icons";
import { Button } from "@webservices/ui";

const Hero = () => {
    return(
        <section className="pb-[80px] bg-transparent bg-[linear-gradient(0deg,_#FFFFFF_0%,_#F0EBE3_100%)] dark:bg-[linear-gradient(0deg,_#31363c_0%,_#222831_100%)]">
            <div className="min-h-screen flex items-center max-w-[1300px] mx-auto">
                <div className="w-full">
                    <div className="relative">
                        <div>
                            <div className="max-w-[740px]">
                                <div className="text-15 uppercase tracking-0.10 dark:text-white">
                                    <span>
                                        Hello, <b className="text-brand">My Name is</b>
                                    </span>
                                </div>
                                <h1 className="font-jost text-90 uppercase tracking-0.05 leading-[90px] mt-15 title-shadow text-white font-bold">
                                    <span>
                                        <b className="text-brand">Vinod</b> Kumar
                                    </span>
                                </h1>
                                <div className="text-15 uppercase font-medium tracking-0.05 flex items-center mt-32">
                                    I am a <span className="font-jost text-32 ml-12 text-brand dark:text-white">Frontend Developer</span>
                                </div>
                            </div>
                            <div className="max-w-[620px] py-40">
                                <div>
                                    <p className="text-18">
                                        From Bangalore. I specialize in creating the user-facing 
                                        components and features of a web application and native applications.
                                    </p>
                                </div>
                                <div className="mt-32 flex">
                                    <a 
                                        target="_blank" 
                                        rel="nofollow" 
                                        href="https://twitter.com/vakadu"
                                        className="mr-16 relative inline-block"
                                    >
                                        <TwitterIcon className="w-24 h-24"/>
                                    </a>
                                    <a 
                                        target="_blank" 
                                        rel="nofollow" 
                                        href="https://www.linkedin.com/in/vinod-kumar-6073b4117/"
                                        className="mr-16 relative inline-block"
                                    >
                                        <LinkedinIcon className="w-24 h-24"/>
                                    </a>
                                </div>
                            </div>
                            <div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;
