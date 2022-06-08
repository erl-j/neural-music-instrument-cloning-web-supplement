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
import LossPlots from "./LossPlots";
import Home from "./Home";
import Poster from "./Poster";
import Rd from "./Redirect";

const Root = ({ children }) => (
    <HashRouter basename="/">

        <div style={{ margin: 32 }}>
            <h1>Neural Music Instrument Cloning - Web Supplement</h1>

            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/experiments"}>4.2, 4.3 - Experiments</Link></li>
                <li><Link to={"/lossplots"}>4.2, 4.3 - Cloning loss plots</Link></li>
                <li><Link to={"/applications"}>5 - Demonstration of Applications</Link></li>

            </ul>

            <Routes>
                <Route path="/">
                    <>
                        <Route path="/" element={<Home />} />
                        <Route path="/experiments" element={<Experiments />} />
                        <Route path="/applications" element={<Applications />} />
                        <Route path="/lossplots" element={<LossPlots />} />
                        <Route path="/poster" element={<Rd></Rd>} />
                    </>
                </Route>
            </Routes>
        </div>


    </HashRouter>

);


export default Root