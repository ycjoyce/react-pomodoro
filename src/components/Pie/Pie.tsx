import React, { FC, useState, useEffect } from "react";
import theme from "../../styles/abstracts/theme";
import { StyledCircle, StyledRotateBox, StyledChildrenBox } from "./Pie.style";

export interface PieProps {
  degree: number;
  color?: string;
  children?: React.ReactNode;
}

const Pie: FC<PieProps> = ({
  degree,
  color = theme.color.primary,
  children,
}) => {
  const [rotateDegree, setRotateDegree] = useState(degree);

  useEffect(() => {
    let convertDegree = degree;
    if (degree < 0) {
      convertDegree = 0;
    } else if (degree > 360) {
      convertDegree = 360;
    }
    setRotateDegree(convertDegree);
  }, [degree]);

  return (
    <StyledCircle color={color}>
      <StyledRotateBox color={color} degree={rotateDegree} />
      <StyledChildrenBox>{children}</StyledChildrenBox>
    </StyledCircle>
  );
};

export default Pie;
