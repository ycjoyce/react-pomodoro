import React, { FC, useEffect, useRef, useState } from "react";
import usePrevious from "../../hooks/usePrevious";
import StyledAudioButton from "./AudioButton.style";

export interface AudioButtonProps {
  audio: string;
  playing?: boolean;
  onClick?: (nextPlaying: boolean) => void;
}

const AudioButton: FC<AudioButtonProps> = ({
  audio,
  playing = false, // 父元件指定播放狀態
  onClick = () => {},
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const prevPlaying = usePrevious(playing);
  const [curPlaying, setCurPlaying] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }
    if (!buttonClicked && playing) {
      // 如果是初始狀態，且父元件指定的 playing 為 true
      // 則不要播放（因為瀏覽器在 user 沒有互動時執行 .play() 會報錯）
      return;
    }
    // 根據父元件指定的 playing 來執行 play 或 pause
    audioRef.current[playing ? "play" : "pause"]();
    setCurPlaying(playing);
  }, [buttonClicked, playing, prevPlaying]);

  const handleClick = () => {
    // 如果是初始狀態，則直接回傳原本的 playing
    // 如果不是初始狀態，就回傳相反的 playing 作為下一個播放狀態
    onClick(!buttonClicked && playing ? playing : !playing);

    if (!buttonClicked) {
      return setButtonClicked(true);
    }
  };

  return (
    <>
      <StyledAudioButton playing={curPlaying} onClick={handleClick} />
      <audio ref={audioRef} src={audio} autoPlay={false} />
    </>
  );
};

export default AudioButton;
