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
                            </div>
                        </div>
                        <div>
                            I am a Frontend Developer
                        </div>
                        <div>
                            From Bangalore. I specialize in creating the user-facing 
                            components and features of a web application and native applications.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;
