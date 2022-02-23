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
  // 被使用者選中的鈴聲 id
  const [checkedRingtoneItem, setCheckedRingtoneItem] = useState("");
  // 正在播放的鈴聲 id
  const [playingItem, setPlayingItem] = useState("");

  useEffect(() => {
    setCheckedRingtoneItem(checkedItem);
  }, [checkedItem]);

  const renderItems = (contents: RingtoneItemProps[]) => {
    /**
     * 處理音源播放按鈕的點擊事件
     * @param id 被點擊的按鈕的鈴聲 id
     * @param goingToPlay 接下來要播放或暫停，true 則為播放
     */
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
