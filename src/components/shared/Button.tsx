import * as React from "react";
import styled from "styled-components";

interface IButton {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
}

export const Button: React.FC<IButton> = ({ children, onClick }) => {
  return <ButtonWrap onClick={onClick}>{children}</ButtonWrap>;
};

interface IStartButton {
  active: boolean;
}

const startButton = <P extends IButton>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithCustomLogic: React.FC<P & IStartButton> = (props) => {
    return <WrappedComponent {...props} />;
  };

  return WithCustomLogic;
};

// Usage:
export const StartButton = startButton<IButton>(Button);

const ButtonWrap = styled.button`
  cursor: pointer;
  min-width: 80px;
  min-height: 80px;
  height: fit-content;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background_btn};
  border-radius: 24px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.background_btn_hover};
  }
`;
