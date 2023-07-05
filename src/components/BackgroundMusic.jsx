import { useEffect, useState } from 'react';

const BackgroundMusic = ({ musicUrl }) => {
  const [audio, setAudio] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = new Audio(musicUrl);
    setAudio(audioElement);
  }, [musicUrl]);

  useEffect(() => {
    if (audio) {
      audio.volume = volume;
      audio.muted = isMuted;
      audio.loop = true;
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [audio, volume, isMuted, isPlaying]);

  const handleToggleMute = () => {
    setIsMuted((prevIsMuted) => !prevIsMuted);
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
  };

  const handleTogglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div>
      <h3>Background Music</h3>
      {audio && (
        <div>
          <button className='mute' onClick={handleToggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
          />
          <button className='play' onClick={handleTogglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
      )}
    </div>
  );
};

export default BackgroundMusic;

