import * as React from "react";
import { styled } from "styled-components";

import brain_1 from "../assets/icons/brain-1.png";
import brain_2 from "../assets/icons/brain-2.png";
import cup_1 from "../assets/icons/cup-1.png";
import cup_2 from "../assets/icons/cup-2.png";
import cup_3 from "../assets/icons/cup-3.png";

interface ITags {
  type: "Focus" | "Short break" | "Long break";
  isLight: boolean;
}

export const Tags: React.FC<ITags> = ({ type, isLight }) => {
  switch (type) {
    case "Short break":
      return (
        <Tag>
          <img src={isLight ? cup_1 : cup_3} alt="cup" />
          <span>Short Brake</span>
        </Tag>
      );

    case "Long break":
      return (
        <Tag>
          <img src={isLight ? cup_2 : cup_3} alt="cup" />
          <span>Long Brake</span>
        </Tag>
      );

    default:
      return (
        <Tag>
          <img src={isLight ? brain_1 : brain_2} alt="brain" />
          <span>Focus</span>
        </Tag>
      );
  }
};

const Tag = styled.h5`
  padding: 10px 17px;
  background-color: ${({ theme }) => theme.colors.background_btn};
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 9px;

  margin-bottom: 10px;
  cursor: pointer;

  img {
    width: 30px;
    height: 26px;
  }

  span {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
  }
`;
