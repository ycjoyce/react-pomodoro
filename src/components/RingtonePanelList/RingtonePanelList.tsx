import React, { FC, useState, useEffect } from "react";
import PanelList from "../PanelList/PanelList";
import PanelItem from "../PanelItem/PanelItem";
import RingtoneItem, { RingtoneItemProps } from "../RintoneItem/RintoneItem";

export interface RingtonePanelListProps {
  contents: RingtoneItemProps[];
  checkedItem?: string;
  onSelect?: (id: string) => void;
}

const RingtonePanelList: FC<RingtonePanelListProps> = ({
  contents,
  checkedItem = "",
  onSelect = () => {},
}) => {
  const [checkedRingtoneItem, setCheckedRingtoneItem] = useState("");
  const [playingItem, setPlayingItem] = useState("");

  useEffect(() => {
    setCheckedRingtoneItem(checkedItem);
  }, [checkedItem]);

  const renderItems = (contents: RingtoneItemProps[]) => {
    const handleAudioClick = (id: string, goingToPlay: boolean) => {
      setPlayingItem(goingToPlay ? id : "");
    };

    const handleSelect = (id: string) => {
      setCheckedRingtoneItem(id);
      onSelect(id);
    };

    return contents.map(({ id, title, ringtone }) => (
      <PanelItem key={id}>
        <RingtoneItem
          id={id}
          title={title}
          ringtone={ringtone}
          checked={id === checkedRingtoneItem}
          playing={id === playingItem}
          onSelect={handleSelect}
          onAudioClick={(goingToPlay) => handleAudioClick(id, goingToPlay)}
        />
      </PanelItem>
    ));
  };

  return <PanelList>{renderItems(contents)}</PanelList>;
};

export default RingtonePanelList;
