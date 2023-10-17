import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "../App";
import { Postbox } from "../features/Postbox/Postbox";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={`/`} element={<App />}>
            <Route path={'hot'} element={<Postbox />} />
            <Route path={'new'} element={<Postbox />} />
            <Route path={'top'} element={<Postbox />} />
            <Route path={'best'} element={<Postbox />} />
        </Route>
    )
)

export default router;