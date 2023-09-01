"use client";

import { PropsWithChildren, Fragment } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { firebaseLogEvent } from "@webservices/analytics";

const RootLayout = ({ children }: PropsWithChildren) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();    

    // useEffect(() => {
    //     let newPageViewPath: string | undefined;

    //     if (pathname) {
    //         newPageViewPath = pathname + searchParams.toString();
    //     }

    //     firebaseLogEvent('screen_view', { newPageViewPath });
    // }, [pathname, searchParams]);

    return(
        <Fragment>
            <div className="flex">
                hello
            </div>
        </Fragment>
    )
};

export default RootLayout;
