import React, { useState } from 'react';
import { useSelector } from 'react-redux';


export function Header() {

    const title = useSelector((state) => state.header.title);

    return (
        <h1>{title}</h1>
    )
}

