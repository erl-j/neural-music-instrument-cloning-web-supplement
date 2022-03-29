import './App.css';
import React from 'react';
import CustomAudioPlayer from './CustomAudioPlayer';

const schemes = [
  "sax_partial",
  "scratch_nof0",
  // "sax_pretrained_only",
  "scratch_nof0_free_reverb",
  "sax_whole",
  "swc_nosax_partial",
  "scratch",
  "swc_nosax_whole",
  "scratch_free_reverb"
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

const instruments = {
  "Flute": flutes,
  "Saxophone": saxophones,
  "Trombone": trombones
}

const durations = ["4", "8", "16", "32", "64", "128", "256"]

const demo_approaches = ["whole", "partial"]
const demo_durations = ["4", "8", "16", "32"]

const EXPERIMENTS = {
  "4.1 - Comparing cloning approaches": ["scratch", "sax_whole", "sax_partial"],
  "4.2 - Cloning an unseen instrument": ["scratch", "sax_whole", "sax_partial", "swc_nosax_whole", "swc_nosax_partial"],
  "4.3 - F0 confidence vs no F0 confidence": ["scratch", "scratch_nof0"],
  "4.4 - Comparing reverb designs": ["scratch", "scratch_free_reverb"],
}

function App() {


  return (
    <div style={{ margin: 32 }}>
      <h1>Neural Music Instrument Cloning - Web Supplement</h1>
      <text>All clips longer than 32 s are cropped to 32 s</text>

      <div>
        <h2>Experiments</h2>
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
                      <CustomAudioPlayer src={process.env.PUBLIC_URL + "/audio/plot_data_final/" + "training_data" + "/d=" + duration + "_training_data.wav"} ></CustomAudioPlayer>
                    </td>)}
                </tr>
                <tr>
                  <td>Target </td>
                  <td>
                    <CustomAudioPlayer controls src={process.env.PUBLIC_URL + "/audio/" + "unseen target.wav"} ></CustomAudioPlayer>
                  </td>
                  {[...Array(6)].map(s => <td style={{ textAlign: "center" }}>"</td>)}
                </tr>
              </thead>
              <tbody>
                {EXPERIMENTS[experiment_name].map(scheme =>
                  <tr key={scheme}>
                    <td>{scheme}</td>
                    {durations.map(duration =>
                      <td key={duration} >
                        <CustomAudioPlayer controls src={process.env.PUBLIC_URL + "/audio/plot_data_final/" + scheme + "/d=" + duration + "_unseen_estimate.wav"}></CustomAudioPlayer>
                      </td>)}
                  </tr>)}
              </tbody>
            </table>
          </div>)
        }
      </div>

      <div>
        <h2>Cloning demos</h2>
        {
          Object.keys(instruments).map(instrument =>
            <div key={instrument}>
              {/* <h3>{instrument}</h3> */}
              {instruments[instrument].map((recording_name, recording_index) =>
                <div>
                  <h3 key={recording_name}>{instrument + " nr " + recording_index}</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>approach / duration</th>
                        {demo_durations.map(duration => <th>{duration}</th>)}
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <td>Training data</td>
                        {demo_durations.map(duration =>
                          <td>
                            <CustomAudioPlayer controls src={process.env.PUBLIC_URL + "/audio/demos/" + instrument + "/" + recording_name + "/" + "training_data" + "/d=" + duration + "_training_data.wav"} ></CustomAudioPlayer>
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td>Target </td>
                        <td>
                          <CustomAudioPlayer controls src={process.env.PUBLIC_URL + "/audio/demos/" + instrument + "/" + recording_name + "/" + "unseen_target.wav"} ></CustomAudioPlayer>
                        </td>
                        {[...Array(3)].map(s => <td style={{ textAlign: "center" }}>"</td>)}
                      </tr>
                      {demo_approaches.map(scheme =>
                        <tr key={scheme}>
                          <td>{scheme}</td>
                          {demo_durations.map(duration =>
                            <td key={duration} >
                              <CustomAudioPlayer controls src={process.env.PUBLIC_URL + "/audio/demos/" + instrument + "/" + recording_name + "/" + scheme + "/d=" + duration + "_unseen_estimate.wav"}></CustomAudioPlayer>
                            </td>)}
                        </tr>)}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )
        }
      </div>

    </div >

  );
}

export default App;
