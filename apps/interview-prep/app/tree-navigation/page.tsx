// https://devtools.tech/questions/s/how-to-build-a-confluence-like-sidebar-with-tree-structure-or-atlassian-frontend-interview-question-or-react-js---qid---3r7988VsESMQBt9vP1Zi
"use client"

import React, { useState } from 'react';

import Data from './data';

const Node = ({ label, link, children }: any) => {
    const [open, setOpen] = useState(false);
    const parentNode = Boolean(children && children.length);

    return (
        <li onClick={parentNode ? () => setOpen(!open) : () => null}>
            <a href={link}>
                {label}
            </a>
            {
                parentNode && open ?
                    <Nodes nodes={children} />
                    :
                    null
            }
        </li>

    )
};

const Nodes = ({ nodes }: { nodes: any }) => {
    return (
        <ul>
            {
                nodes?.map((node: any) => {
                    return <Node key={node.id} {...node} />
                })
            }
        </ul>
    )
};

const TreeNav = () => {
    return (
        <section>
            <Nodes nodes={Data} />
        </section>
    );
};

export default TreeNav;
