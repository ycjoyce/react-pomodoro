import React, { FC, useState } from "react";
import PanelList from "../PanelList/PanelList";
import PanelItem from "../PanelItem/PanelItem";
import RingtoneItem, { RingtoneItemProps } from "../RintoneItem/RintoneItem";

export interface RingtonePanelListProps {
  contents: RingtoneItemProps[];
}

const RingtonePanelList: FC<RingtonePanelListProps> = ({ contents }) => {
  const [checkedItem, setCheckedItem] = useState("");
  const [playingItem, setPlayingItem] = useState("");

  const renderItems = (contents: RingtoneItemProps[]) => {
    const handleAudioClick = (title: string, nextPlaying: boolean) => {
      setPlayingItem(nextPlaying ? title : "");
    };

    return contents.map(({ title, ringtone }) => (
      <PanelItem key={title}>
        <RingtoneItem
          title={title}
          ringtone={ringtone}
          checked={title === checkedItem}
          playing={title === playingItem}
          onSelect={setCheckedItem}
          onAudioClick={(nextPlaying) => handleAudioClick(title, nextPlaying)}
        />
      </PanelItem>
    ));
  };

  return <PanelList>{renderItems(contents)}</PanelList>;
};

export default RingtonePanelList;
