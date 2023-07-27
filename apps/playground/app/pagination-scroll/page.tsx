"use client";

import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const Pagination = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState<any>([]);
    const loaderRef = useRef<any>();

    useEffect(() => {

        fetchData();

    }, [page]);

    useEffect(() => {
        const observer = new IntersectionObserver(([observe]) => {
            if(observe.isIntersecting) {
                setPage((prev) => prev + 1);
            }
        });

        observer.observe(loaderRef.current);
        
    }, []);

    const fetchData = async () => {
        const { data } = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=50`);
        setData((prev: any) => (data && data.data ? [...prev, ...data.data] : prev));
    };    

    return(
        <div className='m-24 flex justify-start items-center flex-col'>
            Pagination
            {/* {
                Array.from({ length: 100 }).map((_, i) => {                    
                    return(
                        <div key={i}>
                            { i }
                        </div>
                    )
                })
            } */}

            <div>
                {
                    data?.map((d: any) => {
                        return(
                            <div key={d.id} className=''>
                                <div>{d.name}</div>
                                <div>{d.trips}</div>
                            </div>
                        )
                    })
                }
            </div>

            <div ref={loaderRef}>Loading...</div>
        </div>
    )
};

export default Pagination;
