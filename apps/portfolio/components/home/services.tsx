import { PortfolioSectionHeader } from "@webservices/ui";
import { DesktopIcon, PhoneIcon } from "@webservices/icons";

const data = [
    {
        "id": 1,
        "img": <DesktopIcon className="w-[54px] h-[54px]"/>,
        "heading": "Web Development",
        "title": "Javascript",
        "descriptoin": `Building user interfaces and front-end components for web applications using React. 
            Writing efficient, reusable, and scalable code to implement the UI design and user interactions.`,
        "delay": ""
    },
    {
        "id": 2,
        "img": <DesktopIcon className="w-[54px] h-[54px]"/>,
        "heading": "Web Development",
        "title": "React",
        "descriptoin": `Building user interfaces and front-end components for web applications using React. 
            Writing efficient, reusable, and scalable code to implement the UI design and user interactions.`,
        "delay": "100"
    },
    {
        "id": 3,
        "img": <PhoneIcon className="w-[54px] h-[54px]"/>,
        "heading": "Mobile Development",
        "title": "React Native & Flutter",
        "descriptoin": `Using React Native and Flutter to build cross-platform mobile applications. 
            Write code once and create apps that run natively on both iOS and Android platforms.`,
        "delay": "200"
    },
];

const Services = () => {
    
    return(
        <section className="pb-[80px] bg-transparent bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F0EBE3_100%)] dark:bg-[linear-gradient(0deg,_#31363c_0%,_#222831_100%)]">
            <article className="max-w-[1300px] mx-auto px-16 md:px-24">
                <PortfolioSectionHeader
                    title="what i do"
                />
                <section className="relative lg:px-0 grid md:grid-cols-3 gap-24">
                    {
                        data?.map((service) => {
                            const classes = `col-span-1 p-42 after:absolute cursor-pointer
                                after:top-[-72px] after:left-[-40px] z-2 after:bg-brand 
                                after:rounded-full after:z-[-2] after:w-[200px] 
                                after:h-[200px] overflow-hidden 
                                bg-grey-bg rounded-[16px] hover:after:h-[120%] 
                                hover:after:w-[120%] hover:after:top-[-10%] hover:after:rounded-none
                                hover:after:left-[-10%] before:w-[200px] 
                                before:h-[200px] before:absolute before:bg-grey-bg
                                before:left-[-220px] before:top-[-220px] before:hover:left-[-40px]
                                before:hover:top-[-72px] before:hover:rounded-full
                                before:duration-0.3 before:ease-in
                                after:duration-0.3 after:ease-in group
                            `;
                            return(
                                <article 
                                    className={classes}
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay={service.delay}
                                    key={service.id}
                                >
                                    <figure className="text-white group-hover:text-black relative z-2">
                                        { service.img }
                                    </figure>
                                    <section className="pt-[64px] group-hover:text-white">
                                        <h4 className="text-13 font-semibold tracking-0.05 uppercase mb-24">
                                            <span>{ service.heading }</span>
                                        </h4>
                                        <h5 className="text-24 font-semibold">
                                            <span>{ service.title }</span>
                                        </h5>
                                        <p className=" min-h-[134px] mt-24">
                                            { service.descriptoin }
                                        </p>
                                    </section>
                                </article>
                            )
                        })
                    }
                </section>
            </article>
        </section>
    )
};

export default Services;
