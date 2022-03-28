import './App.css';
import React from 'react';

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


const flutes=["9MKeGursT48_part0-00000-of-00001",
"be1jJCH32OU_part0-00000-of-00001",
"GY6_fvCO-qM_part0-00000-of-00001",
"eHbxLcoLWYY_part0-00000-of-00001"]

const saxophones=["A8Q-O5KB7kw_part0-00000-of-00001",
"igCT4G1M1Xo_part0-00000-of-00001",
"ZQRZmdIda6s_part0-00000-of-00001",
"uPFmNhqERog_part0-00000-of-00001"]

const trombones=["2bYLzLsIWME_part0-00000-of-00001",
"_W2VM3uinZA_part0-00000-of-00001",
"LBZ1EvU5bYY_part0-00000-of-00001",
"wmyWpgA3IOM_part0-00000-of-00001",]

const instruments={
  "Flute": flutes,
  "Saxophone": saxophones,
  "Trombone": trombones
}

const durations = ["4", "8", "16", "32", "64", "128", "256"]

const demo_approaches = ["whole", "partial"]
const demo_durations = ["4", "8", "16", "32"]
function App() {


  return (
    <>
    <div>
      <h1>Plot data</h1>
      <h2>Target <audio controls src={process.env.PUBLIC_URL+"/audio/"+"unseen target.wav"} ></audio></h2>
    <table>
      <tr>
      <th>approach / duration</th>
      {durations.map(duration => <th>{duration}</th>)}
      </tr>

      <tr>
          <td>training data</td>
          {durations.map(duration =>
            <td key={duration} >
              <audio controls src={process.env.PUBLIC_URL+"/audio/plot_data_final/"+"training_data"+"/d="+duration+"_training_data.wav"}></audio> 
            </td>)}
      </tr>

      {schemes.map(scheme =>
        <tr key={scheme}>
          <td>{scheme}</td>
          {durations.map(duration =>
            <td key={duration} >
              <audio controls src={process.env.PUBLIC_URL+"/audio/plot_data_final/"+scheme+"/d="+duration+"_unseen_estimate.wav"}></audio> 
            </td>)}
        </tr>)}
      </table>
      </div>
    {Object.keys(instruments).map(instrument =>
      <div key={instrument}>
        <h1>{instrument}</h1>
        {instruments[instrument].map(recording_name =>
        <div>
        <h2 key={recording_name}>{recording_name}</h2>
        <h3>Target: <audio controls src={process.env.PUBLIC_URL+"/audio/demos/"+instrument+"/"+recording_name+"/"+"unseen_target.wav"}></audio></h3>
          <table>
          <tr>
          <th>approach / duration</th>
          {demo_durations.map(duration => <th>{duration}</th>)}
          </tr>
          {demo_approaches.map(scheme =>
            <tr key={scheme}>
              <td>{scheme}</td>
              {demo_durations.map(duration =>
                <td key={duration} >
                  <audio controls src={process.env.PUBLIC_URL+"/audio/demos/"+instrument+"/"+recording_name+"/"+scheme+"/d="+duration+"_unseen_estimate.wav"}></audio> 
                </td>)}
            </tr>)}
          </table>
          </div>
               )}
          </div>
    )}
      
    </>

  );
}

export default App;
