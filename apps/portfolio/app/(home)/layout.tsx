"use client";

import { PropsWithChildren, Fragment, useEffect } from "react";
import AOS from "aos";
import { Toaster } from 'react-hot-toast';

import "aos/dist/aos.css";
import { stickyNav } from "@webservices/utils";
import { PortfolioFooter, PortfolioHeader } from "@webservices/ui";


const RootLayout = ({ children }: PropsWithChildren) => {

    useEffect(() => {
        window.addEventListener("scroll", stickyNav);
    }, []);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Fragment>
            <main className="relative min-h-[50vh]">
                <PortfolioHeader />
                <section className="relative">
                    {children}
                </section>
                <PortfolioFooter />
            </main>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
                toastOptions={{
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                    success: {
                        duration: 3000,
                    },
                }}
            />
        </Fragment>
    )
};

export default RootLayout;
