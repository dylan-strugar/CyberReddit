import React from 'react';
import { useSelector } from 'react-redux';


export function Postbox() {

    const title = useSelector((state) => state.postbox.title);
    const content = useSelector((state) => state.postbox.content);

    return (
        <>
        <h1>{title}</h1>
        <h2>{content}</h2>
        </>
    )
}

