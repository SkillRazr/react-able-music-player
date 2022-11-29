import React from "react";

const MusicPlayer = () => {
  return (
    <>
      <audio
        id="audio1"
        data-able-player
        preload="auto"
        data-show-now-playing="true"
      >
        <source type="audio/ogg" src="ableplayer1/media/frenchsong.ogg" />
        <source type="audio/mpeg" src="ableplayer1/media/frenchsong.mp3" />
        <track
          kind="captions"
          src="ableplayer1/media/frenchsong_captions_fr.vtt"
          srcLang="fr"
          label="Français"
        ></track>
        <track
          kind="subtitles"
          src="ableplayer1/media/frenchsong_captions_en.vtt"
          srcLang="en"
          label="English"
        ></track>
        <track
          kind="chapters"
          src="ableplayer1/media/frenchsong_chapters_fr.vtt"
          srcLang="fr"
          label="Français"
        ></track>
        <track
          kind="chapters"
          src="ableplayer1/media/frenchsong_chapters_en.vtt"
          srcLang="en"
          label="English"
        ></track>
      </audio>
    </>
  );
};

export default MusicPlayer;
