import * as React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { styled, ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { Tags } from "./components/Tags";
import { Button, StartButton } from "./components/shared/Button";
import { Timer } from "./components/Timer";
import { Modal } from "./components/shared/Modal";
import useToggleTime from "./hooks/useToggleTime";
import { SettingForm } from "./components/SettingForm";
import { RootState } from "./redux/store";
import { setTime } from "./redux/timerSlice";

export const App: React.FC = () => {
  const { focusInterval, shortBreakInterval, longBreakInterval } = useSelector(
    (state: RootState) => state.timer
  );
  const dispatch = useDispatch();

  const [modalActive, setModalActive] = React.useState(false);
  const [start, setStart] = React.useState(false);
  const [currentState, selectedTheme, toggleState] = useToggleTime();

  const handleStart = () => {
    setStart(!start);
  };

  const handleNext = () => {
    toggleState();
  };

  React.useLayoutEffect(() => {
    switch (currentState) {
      case "Short break":
        dispatch(setTime(shortBreakInterval));
        break;

      case "Long break":
        dispatch(setTime(longBreakInterval));
        break;

      default:
        dispatch(setTime(focusInterval));
    }
  }, [currentState, focusInterval, shortBreakInterval, longBreakInterval]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <AppWrap>
        <GlobalStyle />
        <Tags type={currentState} isLight={selectedTheme.isLight} />
        <Timer active={start} />

        <Buttons>
          <Button onClick={() => setModalActive(true)}>
            <Middot>&middot;&middot;&middot;</Middot>
          </Button>
          <StartButton active={start} onClick={handleStart}>
            <StartIcon
              className={start ? "fa fa-pause" : "fa fa-play"}
              aria-hidden="true"
            />
          </StartButton>
          <Button onClick={handleNext}>
            <i className="fa fa-forward"></i>
          </Button>
        </Buttons>
      </AppWrap>

      <Modal title="Settings" active={modalActive} setActive={setModalActive}>
        <SettingForm />
      </Modal>
    </ThemeProvider>
  );
};

const AppWrap = styled.main`
  background-color: ${({ theme }) => theme.colors.background};

  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  button:nth-child(2) {
    background: ${({ theme }) => theme.colors.start_btn};
    border-radius: 32px;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.start_btn_hover};
    }
  }
`;

const Middot = styled.p`
  font-size: 26px;
  font-weight: 800;
`;

const StartIcon = styled.i`
  width: 128px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
