"use client";

import { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {

    return(
        <div>
            <div>
                { children }
            </div>
        </div>
    )
};

export default RootLayout;
