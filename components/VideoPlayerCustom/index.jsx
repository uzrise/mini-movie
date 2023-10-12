import React, { useRef, useState } from "react";

const VideoPlayerCustom = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const volume = e.target.value;
    videoRef.current.volume = volume;
    setVolume(volume);
  };

  return (
    <div className="video-player">
      <video ref={videoRef} width="640" height="360" src={src} />
      <div className="controls">
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default VideoPlayerCustom;
