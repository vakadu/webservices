"use client";

import { PropsWithChildren, Fragment, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

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
        initCursor();

        window.addEventListener("scroll", stickyNav);
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.Splitting = require("splitting");
        }
        window.Splitting();
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

    return(
        <Fragment>
            <div className="relative min-h-[50vh]">
                <PortfolioHeader/>
                <div className="relative">
                    { children }
                </div>
            </div>
            <div className="cursor fixed top-0 left-0 w-[30px] h-[30px] bg-grey-light border border-transparent pointer-events-none rounded-full" />
        </Fragment>
    )
};

export default RootLayout;
