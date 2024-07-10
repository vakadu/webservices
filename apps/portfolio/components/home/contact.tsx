import { CallIcon, MailIcon, MapIcon } from "@webservices/icons";
import { PortfolioSectionHeader } from "@webservices/ui";
import Form from "./form";

const data = [
    {
        id: 1,
        img: <MapIcon className="text-brand w-32 h-32" />,
        text: "HSR Layout, Bengaluru",
        delay: "700"
    },
    {
        id: 2,
        img: <MailIcon className="text-brand w-32 h-32" />,
        text: "vakadu10@gmail.com",
        href: "mailto:vakadu10@gmail.com",
        delay: "800"
    },
    {
        id: 3,
        img: <CallIcon className="text-brand w-32 h-32" />,
        text: "+91-9972380619",
        href: "tel:+919972380619",
        delay: "900"
    },
];

const Contact = () => {
    return (
        <section className="pb-[80px] bg-transparent bg-[linear-gradient(0deg,_#FFFFFF_0%,_#F0EBE3_100%)] dark:bg-[linear-gradient(0deg,_#31363c_0%,_#222831_100%)]">
            <article className="max-w-[1300px] mx-auto px-16 md:px-24">
                <PortfolioSectionHeader
                    title="contact me"
                />
                <section className="relative lg:px-0 grid md:grid-cols-3 gap-24">
                    <article className="col-span-1">
                        <h2
                            className="text-24 font-medium"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="400"
                        >
                            {`What's your Story`}
                        </h2>
                        <h2
                            className="text-24 font-medium leading-[42px]"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="500"
                        >
                            Get in touch
                        </h2>
                        <p
                            className="text-18 font-light"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="600"
                        >
                            Always available for freelancing if the right project comes along, Feel free to contact me.
                        </p>
                        {
                            data?.map((con) => {
                                return (
                                    <section
                                        key={con.id}
                                        className="flex py-12 items-center"
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay={con.delay}
                                    >
                                        <figure>
                                            {con.img}
                                        </figure>
                                        {
                                            con.id === 1 ?
                                                <address className="text-18 pl-12 not-italic font-semibold">
                                                    {con.text}
                                                </address>
                                                :
                                                <a
                                                    href={con.href}
                                                    className="text-18 pl-12 font-semibold"
                                                >
                                                    {con.text}
                                                </a>
                                        }
                                    </section>
                                )
                            })
                        }
                    </article>
                    {/* <article className="col-span-2">
                        <Form/>
                    </article> */}
                </section>
            </article>
        </section>
    )
};

export default Contact;
