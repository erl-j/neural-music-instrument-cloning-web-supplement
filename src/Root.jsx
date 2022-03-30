import React from "react";
import { render } from "react-dom"
import { Router, Link } from "@reach/router"
import Experiments from "./Experiments";
import CloningDemos from "./CloningDemos";
import Applications from "./Applications";

const Root = ({ children }) => (
    <div style={{ margin: 32 }}>
        <h1>Neural Music Instrument Cloning - Web Supplement</h1>
        <b>All clips longer than 32 s are cropped to 32 s</b>

        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="experiments">Experiments</Link></li>
                <li><Link to="applications">Demonstration of Applications</Link></li>
                {/* <li><Link to="cloning_demos">Trombone, Flute, Saxophones</Link></li> */}
            </ul>
        </nav>
        <Router>
            <Experiments path="/experiments" />
            <Applications path="/applications" />
            {/* <CloningDemos path="/cloning_demos" /> */}
        </Router>
    </div>
);


export default Root