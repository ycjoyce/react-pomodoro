import styled from "styled-components";
import playIcon from "../../images/play_gray.svg";
import pauseIcon from "../../images/pause_gray.svg";

export interface AudioButtonProps {
  playing: boolean;
}

const StyledAudioButton = styled.button<AudioButtonProps>`
  border: 2px solid ${({ theme }) => theme.color.light};
  border-radius: 100%;
  background-color: transparent;
  display: inline-block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ playing }) => (playing ? pauseIcon : playIcon)});
  padding: 10px;
`;

export default StyledAudioButton;
