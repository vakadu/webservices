"use client";

import { PropsWithChildren, Fragment, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import { activeAnimation, initCursor, stickyNav } from "@webservices/utils";
import { PortfolioHeader } from "@webservices/ui";
import { firebaseLogEvent } from "@webservices/analytics";

declare const window: Window &
   typeof globalThis & {
        Splitting: any
}


const RootLayout = ({ children }: PropsWithChildren) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();    

    useEffect(() => {
        // activeAnimation();
        // initCursor();

        window.addEventListener("scroll", stickyNav);
    }, []);

    useEffect(() => {
        // jarallaxAnimation();
        // document.querySelector("body").className = pageClassName
        //   ? pageClassName
        //   : "";
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
            </main>
            {/* <div className="cursor z-10 fixed top-0 left-0 w-[30px] h-[30px] bg-grey-light border border-transparent pointer-events-none rounded-full" /> */}
        </Fragment>
    )
};

export default RootLayout;
