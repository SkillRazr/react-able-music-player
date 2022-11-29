import React from "react";

const MusicPlayerWithPlayList = () => {
  return (
    <>
      <audio
        id="audio1"
        data-able-player
        preload="auto"
        data-show-now-playing="true"
      ></audio>

      <ul className="able-playlist" data-player="audio1" data-embedded="">
        <li data-poster="something.jpg" className="">
          <span
            className="able-source"
            data-type="audio/mpeg"
            data-src="ableplayer1/media/paulallen.mp3"
            aria-hidden="true"
          ></span>
          <span
            className="able-source"
            data-type="audio/ogg"
            data-src="ableplayer1/media/paulallen.ogg"
            aria-hidden="true"
          ></span>
          <button>The Paul Allen Song</button>
        </li>
        <li className="">
          <span
            className="able-source"
            data-type="audio/mpeg"
            data-src="ableplayer1/media/php70alpha.mp3"
            aria-hidden="true"
          ></span>
          <span
            className="able-source"
            data-type="audio/ogg"
            data-src="ableplayer1/media/php70alpha.ogg"
            aria-hidden="true"
          ></span>
          <button>PHP 7.0 Alpha</button>
        </li>
        <li className="">
          <span
            className="able-source"
            data-type="audio/mpeg"
            data-src="ableplayer1/media/frenchsong.mp3"
            aria-hidden="true"
          ></span>
          <span
            className="able-source"
            data-type="audio/ogg"
            data-src="ableplayer1/media/frenchsong.ogg"
            aria-hidden="true"
          ></span>
          <button lang="fr">Une Chanson Française</button>
        </li>
        <li className="able-current">
          <span
            className="able-source"
            data-type="audio/mpeg"
            data-src="https://freeplay-rebuild-cms-production.s3.amazonaws.com/a/be_thrilled_30_1d9a40ecf3.mp3"
            aria-hidden="true"
          ></span>
          <button aria-current="true">Suspense</button>
        </li>
        <li className="">
          <span
            className="able-source"
            data-type="audio/mpeg"
            data-src="ableplayer1/media/everyday.mp3"
            aria-hidden="true"
          ></span>
          <span
            className="able-source"
            data-type="audio/ogg"
            data-src="ableplayer1/media/everyday.ogg"
            aria-hidden="true"
          ></span>
          <button>Every Day</button>
        </li>
      </ul>
    </>
  );
};

export default MusicPlayerWithPlayList;
