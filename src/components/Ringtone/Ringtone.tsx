import React, { FC } from "react";
import Title from "../Title/Title";
import Panel from "../Panel/Panel";
import { Ringtone as RingtoneType } from "../RintoneItem/RintoneItem";
import RingtonePanelList from "../RingtonePanelList/RingtonePanelList";
import { StyledOperate } from "../OperateSection/OperateSection.style";

export type WorkType = "work" | "break";

export interface RingtoneProps {
  ringtones: { work: RingtoneType[]; break: RingtoneType[] };
  checkedItem?: { work: string; break: string };
  onSelect?: (type: WorkType, id: string) => void;
}

const Ringtone: FC<RingtoneProps> = ({
  ringtones,
  checkedItem = { work: "", break: "" },
  onSelect = () => {},
}) => {
  const handleSelect = (type: WorkType, id: string) => {
    onSelect(type, id);
  };

  const renderList = (type: WorkType) => (
    <RingtonePanelList
      key={type}
      contents={ringtones[type]}
      checkedItem={checkedItem[type]}
      onSelect={(id) => handleSelect(type, id)}
    />
  );

  return (
    <StyledOperate>
      <Title>ringtone</Title>

      <Panel
        contents={[
          {
            tab: "work",
            list: renderList("work"),
          },
          {
            tab: "break",
            list: renderList("break"),
          },
        ]}
      />
    </StyledOperate>
  );
};

export default Ringtone;
