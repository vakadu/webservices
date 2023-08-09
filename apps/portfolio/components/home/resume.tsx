import { PortfolioSectionHeader } from "@webservices/ui";

const data = [
    {
        id: 1,
        title: "Indian Institue of Technology - Roorkee",
        company: "Msc.Int.Chemistry",
        dec: "",
        startYear: "2010",
        endYear: "2015",
    },
    {
        id: 2,
        title: "Software Developer",
        company: "Kwiqpick Services India Pvt. Ltd",
        dec: "",
        startYear: "2017",
        endYear: "2018",
    },
    {
        id: 3,
        title: "Frontend Engnieer",
        company: "Arzooo",
        dec: "",
        startYear: "2018",
        endYear: "2019",
    },
    {
        id: 4,
        title: "Frontend Engnieer - 2",
        company: "Arzooo",
        dec: "",
        startYear: "2019",
        endYear: "2021",
    },
    {
        id: 5,
        title: "Tech Lead(Frontend)",
        company: "Arzooo",
        dec: "",
        startYear: "2021",
        endYear: "2023",
    },
];

const Resume = () => {
    const headerClasses = "text-center capitalize text-24 font-medium pb-24 border-b-2 border-black";

    return(
        <section 
            id='resume'
            className="pb-[80px] bg-transparent bg-[linear-gradient(180deg,_#F0EBE3_0%,_#F0EBE3_100%)] dark:bg-[linear-gradient(0deg,_#31363c_0%,_#222831_100%)]"
        >
            <article className="max-w-[1300px] mx-auto">
                <PortfolioSectionHeader
                    title="resume"
                />
                <div className="">
                    <h5 className={headerClasses}>education & experience</h5>
                    <div>
                        {
                            data.map((res) => {
                                return(
                                    <div
                                        key={res.id}
                                    >
                                        <h6>
                                            { res.title }
                                        </h6>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </article>
        </section>
    )
};

export default Resume;
