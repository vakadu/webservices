"use client";

import { PropsWithChildren, useEffect, useState } from "react";

import { Preloader } from "@webservices/ui";

const RootLayout = ({ children }: PropsWithChildren) => {
    const [loader, setLoader] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 500);
    }, []);

    return(
        <div>
            <Preloader/>
            <div>
                { children }
            </div>
        </div>
    )
};

export default RootLayout;
