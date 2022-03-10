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
  width: 20px !important;
  height: 20px !important;
  cursor: pointer;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ playing }) => (playing ? pauseIcon : playIcon)});
`;

export default StyledAudioButton;
