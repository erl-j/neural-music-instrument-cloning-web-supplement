import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';

const CustomAudioPlayer = ({ src }) => {
    return <AudioPlayer preload="metadata" showJumpControls={false} src={encodeURI(src)} showSkipControls={false} customAdditionalControls={[RHAP_UI.CURRENT_TIME,
    <div>/</div>,
    RHAP_UI.DURATION]} customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.ADDITIONAL_CONTROLS,]}

        customProgressBarSection={
            [
                RHAP_UI.PROGRESS_BAR,
            ]}

    ></ AudioPlayer>
}

export default CustomAudioPlayer
