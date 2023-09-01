import { PortfolioSectionHeader } from "@webservices/ui";

const data = [
    {
        id: 2,
        title: "Software Developer",
        company: "Kwiqpick Services India Pvt. Ltd",
        dec: "",
        startYear: "2017",
        endYear: "2018",
        delayAnimation: ""
    },
    {
        id: 3,
        title: "Frontend Engnieer",
        company: "Arzooo",
        dec: "",
        startYear: "2018",
        endYear: "2019",
        delayAnimation: "100"
    },
    {
        id: 4,
        title: "Frontend Engnieer - 2",
        company: "Arzooo",
        dec: "",
        startYear: "2019",
        endYear: "2021",
        delayAnimation: "200"
    },
    {
        id: 5,
        title: "Tech Lead(Frontend)",
        company: "Arzooo",
        dec: "",
        startYear: "2021",
        endYear: false,
        delayAnimation: "300"
    },
];

const Resume = () => {    
    return(
        <section 
            id='experience'
            className="pb-[80px] bg-transparent bg-[linear-gradient(180deg,_#F0EBE3_0%,_#F0EBE3_100%)] dark:bg-[linear-gradient(0deg,_#31363c_0%,_#222831_100%)]"
        >
            <article className="max-w-[1300px] mx-auto px-16 md:px-24">
                <PortfolioSectionHeader
                    title="experience"
                />
                <section className="">
                    {
                        data.map((res) => {
                            return(
                                <section
                                    key={res.id}
                                    className="grid grid-cols-3 md:px-32 py-24 max-w-[1100px] mx-auto"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay={res.delayAnimation}
                                >
                                    <article className="col-span-2 md:col-span-1">
                                        <h2 className="text-18 font-semibold pb-6">{res.title}</h2>
                                        <h6 className="text-16 pb-6 font-medium">{res.startYear} -{" "}
                                            {res.endYear ? (
                                                res.endYear
                                            ) : (
                                                <b>Present</b>
                                            )}
                                        </h6>
                                        <span className="bg-brand text-white px-6 text-14 font-semibold rounded-4 py-4">Full Time</span>
                                    </article>
                                    <article className="col-span-1 md:col-span-2">
                                        <h4 className="text-16 font-semibold">{res.company}</h4>
                                    </article>
                                </section>
                            )
                        })
                    }
                </section>
            </article>
        </section>
    )
};

export default Resume;
