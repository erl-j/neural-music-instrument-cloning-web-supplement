import React from "react";

const Home = () => (
    <div>
        <h2>Home</h2>
        This page is the web supplement for the paper <a href={process.env.PUBLIC_URL + "/Neural_Instrument_Cloning_PREPRINT.pdf"}>Neural music instrument cloning from few samples</a> by Nicolas Jonason and Bob L.T. Sturm, submitted for review at DAFX22.
        <br></br>
        For more information, please visit the <a href="https://github.com/erl-j/neural-instrument-cloning">github</a> page.
    </div>
);

export default Home;