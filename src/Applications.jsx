import React from 'react';
import './App.css';
import ConditioningPlot from './ConditioningPlot';
import CustomAudioPlayer from './CustomAudioPlayer';

const tst_blacklist = ['aGk1zIDQQjQ', 'GWU_50fQ6q0', 'SqWamN0ZYCo', 'z_I41tB8zSc', 'igCT4G1M1Xo', 'A8Q-O5KB7kw', 'LBZ1EvU5bYY', '2bYLzLsIWME', '_W2VM3uinZA', 'ur77HMoZPjY']

const flutes = [
    "9MKeGursT48",
    "be1jJCH32OU",
    "GY6_fvCO-qM",
    "eHbxLcoLWYY"]

const saxophones = [
    "A8Q-O5KB7kw",
    "igCT4G1M1Xo",
    "uPFmNhqERog",
    "ZQRZmdIda6s",
]

const trombones = [
    "2bYLzLsIWME",
    // "_W2VM3uinZA",
    "LBZ1EvU5bYY",
    "wmyWpgA3IOM",]

let instruments = {
    "Saxophone": saxophones,
    "Trombone": trombones,
    "Flute": flutes,
}

// remove recordings in blacklist
instruments = {
    "Saxophone": instruments["Saxophone"].filter(recording_name => !tst_blacklist.includes(recording_name)),
    "Flute": instruments["Flute"].filter(recording_name => !tst_blacklist.includes(recording_name)),
    "Trombone": instruments["Trombone"].filter(recording_name => !tst_blacklist.includes(recording_name)),
}


const loudness_filenames =
    [
        , "training data.wav",
        "loudness down 12 db.wav"
        , "loudness down 6 db.wav"
        , "loudness up 6 db.wav"
        , "loudness up 12 db.wav"
        // , "loudness down 12 db naive.wav"
        // , "loudness down 6 db naive.wav"
        // , "loudness up 6 db naive.wav"
        // , "loudness up 12 db naive.wav"
    ]

const transfer_filenames =
    [
        , "training data.wav",
        , "transfer adjusted loudness.wav"
        , "transfer.wav",
    ]

const pitch_filenames =
    [
        , "training data.wav",
        "transposed down a fourth.wav",
        "transposed up a fourth.wav",
        "transposed down a fourth naive.wav",
        "transposed up a fourth naive.wav",
    ]


const applications = {
    "Editing loudness": { filenames: loudness_filenames, },
    "Editing pitch": { filenames: pitch_filenames },
    "Timbre transfer": {
        filenames: transfer_filenames,
        description:
            <div> We extract the control signals from the following saxophone recording and resynthesize them with our clones.
                <div style={{ width: 200 }}><CustomAudioPlayer src={process.env.PUBLIC_URL + "/audio/unseen target.wav"} /></div>
                Here is a plot of the control signals.
                <ConditioningPlot></ConditioningPlot>
                We also demonstrate the effect of performing an adjustment to the loudness contour in order to better match the range in the clone source.

            </div>

    }
}

const fn2columns = {
    "training data.wav": "training data",
    "loudness down 12 db.wav": "much quieter (-12db)",
    "loudness down 6 db.wav": "quieter (-6db)",
    "loudness up 12 db.wav": "much louder (+12db)",
    "loudness up 6 db.wav": "louder (+6db)",
    "transfer adjusted loudness.wav": "timbre transfer w/ loudness adjustment",
    "transfer.wav": "timbre transfer w/o loudness adjustment",
    "transposed down a fourth.wav": "down a fourth (ours)",
    "transposed up a fourth.wav": "up a fourth (ours)",
    "loudness down 12 db naive.wav": "much quieter naive",
    "loudness down 6 db naive.wav": "quieter naive",
    "loudness up 12 db naive.wav": "much louder naive",
    "loudness up 6 db naive.wav": "louder naive",
    "transposed down a fourth naive.wav": "down a fourth (naive)",
    "transposed up a fourth naive.wav": "up a fourth (naive)",
}

function Applications() {
    return (
        <div>
            <h2>Demonstration of Applications</h2>
            <a>
                On this page we demonstrate the applications.
                All examples here were generated by clones using only 16 seconds target audio data.
                All training clips are cropped to max 32 seconds. All synthesized clips are cropped to max 31 seconds.
            </a>
            {Object.keys(applications).map(app_name =>
                <div key={app_name}>
                    <h3>{app_name}</h3>
                    {applications[app_name].description}
                    <table>
                        <thead>
                            <tr>
                                <th>Clone source name</th>
                                {applications[app_name].filenames.map(fn => <th key={fn}>{fn2columns[fn]}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(instruments).map(instrument =>
                                instruments[instrument].map((recording_name, recording_idx) =>
                                    <tr key={recording_name}>
                                        <td><a href={"https://www.youtube.com/watch?v=" + recording_name}>{instrument} {instruments[instrument].length > 1 ? ("#" + (recording_idx + 1)) : ""}</a></td>
                                        {applications[app_name].filenames.map(fn =>
                                            <td key={fn}>
                                                <CustomAudioPlayer src={process.env.PUBLIC_URL + "/audio/applications/" + instrument + "/" + recording_name + "_part0-00000-of-00001" + "/" + fn} />
                                            </td>)}
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            )
            }
        </div>


        // <div>
        //     <h2>Demonstration of Applications</h2>
        //     <b>All examples here were generated by clones using only 16 seconds target audio data.
        //         Note that Trombone B and Trombone C are from the same player.
        //     </b>

        //     Saxophone recording used for timbre transfer
        //     <CustomAudioPlayer src={process.env.PUBLIC_URL + "/audio/unseen target.wav"} />

        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>recording</th>
        //                 {filenames.map(fn => <th key={fn}>{fn2columns[fn]}</th>)}
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {Object.keys(instruments).map(instrument =>
        //                 instruments[instrument].map((recording_name, recording_idx) =>
        //                     <tr key={recording_name}>
        //                         <td><a href={"https://www.youtube.com/watch?v=" + recording_name.slice(0, 11)}>{instrument} {alphabet[recording_idx].toUpperCase()}</a></td>
        //                         {filenames.map(fn =>
        //                             <td key={fn}>
        //                                 <CustomAudioPlayer src={process.env.PUBLIC_URL + "/audio/applications/" + instrument + "/" + recording_name + "/" + fn} />
        //                             </td>)}
        //                     </tr>
        //                 )
        //             )}
        //         </tbody>
        //     </table>
        // </div>
    );
}

export default Applications;
