import './App.css';
import React from 'react';
import CustomAudioPlayer from './CustomAudioPlayer';
import ConditioningPlot from './ConditioningPlot';


const schemes = [
  "sax-parts",
  "init-whole-no_f0conf",
  // "sax_pretrained_only",
  "init-whole-no_f0conf-free_reverb",
  "sax-whole",
  "nosax-parts",
  "init-whole",
  "nosax-whole",
  "init-whole-free_reverb",
  "init-whole-fn_reverb"
]

const flutes = [
  "9MKeGursT48_part0-00000-of-00001",
  "be1jJCh42OU_part0-00000-of-00001",
  "GY6_fvCO-qM_part0-00000-of-00001",
  "eHbxLcoLWYY_part0-00000-of-00001"]

const saxophones = [
  "A8Q-O5KB7kw_part0-00000-of-00001",
  "igCT4G1M1Xo_part0-00000-of-00001",
  "ZQRZmdIda6s_part0-00000-of-00001",
  "uPFmNhqERog_part0-00000-of-00001"]

const trombones = [
  "2bYLzLsIWME_part0-00000-of-00001",
  "_W2VM3uinZA_part0-00000-of-00001",
  "LBZ1EvU5bYY_part0-00000-of-00001",
  "wmyWpgA3IOM_part0-00000-of-00001",]

const durations = ["4", "8", "16", "32", "64", "128", "256"]

const EXPERIMENTS = {
  "4.2.1 - Comparing cloning approaches": ["init-whole", "sax-whole", "sax-parts"],
  "4.2.2 - Cloning an unseen instrument": ["init-whole", "sax-whole", "sax-parts", "nosax-whole", "nosax-parts"],
  "4.3.1 - F0 confidence vs no F0 confidence": ["init-whole", "init-whole-no_f0conf"],
  "4.3.2 - Comparing reverb designs": ["init-whole", "init-whole-free_reverb", "init-whole-fn_reverb"],
}

function Experiments() {
  return (
    <div>
      <h2>Experiments</h2>
      All training clips are cropped to max 32 seconds. All synthesized clips are cropped to max 31 seconds.
      Here is a plot of the control signals used for resynthesis.
      <ConditioningPlot></ConditioningPlot>
      {Object.keys(EXPERIMENTS).map((experiment_name, i) =>
        <div >
          <h3>{experiment_name}</h3>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>approach / duration</th>
                {durations.map(duration => <th>{duration}</th>)}
              </tr>
              <tr>
                <td>training data excerpt</td>
                {durations.map(duration =>
                  <td key={duration}>
                    <CustomAudioPlayer src={process.env.PUBLIC_URL + "/audio/experiments/" + "training_data" + "/d=" + duration + "_training_data.wav"} ></CustomAudioPlayer>
                  </td>)}
              </tr>

            </thead>
            <tbody>
              <tr>
                <td>Target </td>
                <td>
                  <CustomAudioPlayer controls src={process.env.PUBLIC_URL + "/audio/" + "unseen target.wav"} ></CustomAudioPlayer>
                </td>
                {[...Array(6)].map(s => <td style={{ textAlign: "center" }}>"</td>)}
              </tr>
              {EXPERIMENTS[experiment_name].map(scheme =>
                <tr key={scheme}>
                  <td>{scheme}</td>
                  {durations.map(duration =>
                    <td key={duration} >
                      <CustomAudioPlayer controls src={process.env.PUBLIC_URL + "/audio/experiments/" + scheme + "/d=" + duration + "_unseen_estimate.wav"}></CustomAudioPlayer>
                    </td>)}
                </tr>)}

              {(experiment_name == "4.2.1 - Comparing cloning approaches") &&
                <tr>
                  <td>sax-nearest</td>
                  <td>
                    <CustomAudioPlayer controls src={process.env.PUBLIC_URL + "/audio/" + "nearest/sax-nearest.wav"} ></CustomAudioPlayer>
                  </td>
                  {[...Array(6)].map(s => <td style={{ textAlign: "center" }}>"</td>)}
                </tr>}
              {(experiment_name == "4.2.2 - Cloning an unseen instrument") &&
                <tr>
                  <td>nosax-nearest</td>
                  <td>
                    <CustomAudioPlayer controls src={process.env.PUBLIC_URL + "/audio/" + "nearest/nosax-nearest.wav"} ></CustomAudioPlayer>
                  </td>
                  {[...Array(6)].map(s => <td style={{ textAlign: "center" }}>"</td>)}
                </tr>}
            </tbody>
          </table>
        </div>)
      }
    </div>
  );
}

export default Experiments;
