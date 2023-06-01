import * as React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import {
  setFocusInterval,
  setLongBreakInterval,
  setMode,
  setNotification,
  setShortBreakInterval,
} from "../redux/timerSlice";

export const SettingForm: React.FC = () => {
  const {
    isLight,
    focusInterval,
    shortBreakInterval,
    longBreakInterval,
    notification,
  } = useSelector((state: RootState) => state.timer);
  const dispatch = useDispatch();

  const handleMode = () => {
    dispatch(setMode(!isLight));
  };

  const handleFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFocusInterval(Number(event.target.value)));
  };

  const handleShortBreak = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setShortBreakInterval(Number(event.target.value)));
  };

  const handleLongBreak = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLongBreakInterval(Number(event.target.value)));
  };
  const handleNotifications = () => {
    dispatch(setNotification(!notification));
  };

  return (
    <FormContainer>
      <SwitchContainer>
        <Label>Dark mode</Label>
        <input type="checkbox" checked={!isLight} onChange={handleMode} />
      </SwitchContainer>

      <InputContainer>
        <Label>Focus length</Label>
        <NumericInput
          type="number"
          value={focusInterval}
          min={1}
          onChange={handleFocus}
        />
      </InputContainer>

      <InputContainer>
        <Label>Short break length</Label>
        <NumericInput
          type="number"
          value={shortBreakInterval}
          min={1}
          onChange={handleShortBreak}
        />
      </InputContainer>

      <InputContainer>
        <Label>Long break length</Label>
        <NumericInput
          type="number"
          value={longBreakInterval}
          min={1}
          onChange={handleLongBreak}
        />
      </InputContainer>

      <SwitchContainer>
        <Label>Notifications</Label>
        <input
          type="checkbox"
          checked={notification}
          onChange={handleNotifications}
        />
      </SwitchContainer>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.colors.text};
`;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    position: relative;
    width: 34px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.switch};
    border-radius: 1000px;
    appearance: none;

    &:before {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;

      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: ${({ theme }) => (theme.isLight ? "#fff" : "#000")};
      transition: 0.4s;
    }

    &:checked {
      background-color: ${({ theme }) => theme.colors.text};

      &:before {
        transition: 0.4s;
        left: 16px;
      }
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 96px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 8px;

    text-align: center;
    &::-webkit-inner-spin-button {
      opacity: 1;
    }
  }
`;

const NumericInput = styled.input`
  width: 100px;
  height: 30px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;
