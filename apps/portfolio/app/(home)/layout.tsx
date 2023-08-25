"use client";

import { PropsWithChildren, Fragment, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import { stickyNav } from "@webservices/utils";
import { PortfolioFooter, PortfolioHeader } from "@webservices/ui";
import { firebaseLogEvent } from "@webservices/analytics";


const RootLayout = ({ children }: PropsWithChildren) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();    

    useEffect(() => {
        window.addEventListener("scroll", stickyNav);
    }, []);

    useEffect(() => {
        let newPageViewPath: string | undefined;

        if (pathname) {
            newPageViewPath = pathname + searchParams.toString();
        }

        firebaseLogEvent('screen_view', { newPageViewPath });
    }, [pathname, searchParams]);

    useEffect(() => {
        AOS.init();
      }, []);

    return(
        <Fragment>
            <main className="relative min-h-[50vh]">
                <PortfolioHeader/>
                <section className="relative">
                    { children }
                </section>
                <PortfolioFooter/>
            </main>
        </Fragment>
    )
};

export default RootLayout;
