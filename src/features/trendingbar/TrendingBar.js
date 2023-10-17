import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enableHot, enableBest, enableNew, enableTop } from './trendingBarSlice';
import { Link } from 'react-router-dom';


export function TrendingBar() {
    const dispatch = useDispatch();

    return (
        <>
            <Link to="/hot" onClick={() => { dispatch(enableHot())} }>Hot</Link>
            <Link to="/new" onClick={() => { dispatch(enableNew())} }>New</Link>
            <Link to="/top" onClick={() => { dispatch(enableTop())} }>Top</Link>
            <Link to="/best" onClick={() => { dispatch(enableBest())} }>Best</Link>
            <h1>{useSelector((state) => state.trendingbar.title)}</h1>
        </>
    )
}

