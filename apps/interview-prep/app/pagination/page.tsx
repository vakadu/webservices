"use client"

import React, { useMemo, useState } from 'react';
import Data from './data';

const PAGE_SIZE = 10;

const Pagination = () => {
    const [page, setPage] = useState(1);
    const currData = useMemo(() => {
        const first = (page - 1) * PAGE_SIZE;
        const last = page * PAGE_SIZE;
        return Data.slice(first, last)
    }, [])

    return (
        <section>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    {currData.map(item => {
                        return (
                            <tr key={item?.id}>
                                <td>{item.id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </section>
    );
};

export default Pagination;

