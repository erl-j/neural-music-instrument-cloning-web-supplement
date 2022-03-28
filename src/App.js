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
{/*   */ }


const durations = ["4", "8", "16", "32", "64", "128", "256"]
function App() {

  React.useEffect(() => {
    // inject javascript that allows only one audio clip to play at a time

  });

  return (
    <table>
      <tr>
      <th>approach / duration</th>
      {durations.map(duration => <th>{duration}</th>)}
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

  );
}

export default App;
