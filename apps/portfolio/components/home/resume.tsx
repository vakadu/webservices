import { PortfolioSectionHeader } from "@webservices/ui";

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
                <div className="grid grid-cols-2 lg:gap-42">
                    <div className="col-span-1">
                        <h5 className={headerClasses}>education</h5>
                    </div>
                    <div className="col-span-1">
                        <h5 className={headerClasses}>experience</h5>
                    </div>
                </div>
            </article>
        </section>
    )
};

export default Resume;
