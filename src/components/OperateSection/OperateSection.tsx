import React, { FC, useState } from "react";
import PageButton, { PageButtonProps } from "../PageButton/PageButton";
import ToggleButton from "../ToggleButton/ToggleButton";
import {
  StyledSection,
  StyledBar,
  StyledOperateBox,
} from "./OperateSection.style";

export interface OperateSectionProps {
  pages: PageButtonProps[];
}

const OperateSection: FC<OperateSectionProps> = ({ pages, children }) => {
  const [opened, setOpened] = useState(true);

  const renderPageButtons = (pages: PageButtonProps[]) => {
    return pages.map((page) => (
      <PageButton key={page.page} {...page} active={page.active} />
    ));
  };

  const handleOpened = () => {
    setOpened((o) => !o);
  };

  return (
    <StyledSection>
      <StyledBar>
        <div>{renderPageButtons(pages)}</div>
        <ToggleButton primary opened={opened} onClick={handleOpened} />
      </StyledBar>

      <StyledOperateBox opened={opened}>{children}</StyledOperateBox>
    </StyledSection>
  );
};

export default OperateSection;
