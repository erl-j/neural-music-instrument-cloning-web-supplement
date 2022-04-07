
import React from "react";


const LossPlots = () => {

    return <div>
        <b>These are the loss plots for the cloning experiments in section 4.2 and 4.3. The multiscale spectral loss is shown on the y-axes. The number of epochs is show on the x-axes.</b>

        <img style={{ width: "100%", height: "auto" }} src={process.env.PUBLIC_URL + "/loss_plots.png"}></img>
    </div>
}

export default LossPlots;