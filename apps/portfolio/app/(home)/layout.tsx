"use client";

import { PropsWithChildren, Fragment, useEffect } from "react";

import { initCursor, stickyNav } from "@webservices/utils";
import { PortfolioHeader } from "@webservices/ui";

const RootLayout = ({ children }: PropsWithChildren) => {

    useEffect(() => {
        initCursor();

        window.addEventListener("scroll", stickyNav);
    }, []);

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
