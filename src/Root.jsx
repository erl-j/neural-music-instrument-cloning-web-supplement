import React from "react";
import { render } from "react-dom"
import {
    HashRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Experiments from "./Experiments";
import Applications from "./Applications";

const Root = ({ children }) => (
    <HashRouter basename="/">



        <div style={{ margin: 32 }}>
            <h1>Neural Music Instrument Cloning - Web Supplement</h1>
            <b>All clips longer than 32 s are cropped to 32 s</b>




            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/experiments"}>Experiments</Link></li>
                <li><Link to={"/applications"}>Demonstration of Applications</Link></li>
            </ul>

            <Routes>
                <Route path="/">
                    <>
                        <Route path="/experiments" element={<Experiments />} />
                        <Route path="/applications" element={<Applications />} />
                    </>
                </Route>
            </Routes>
        </div>


    </HashRouter>

);


export default Root