import * as React from "react";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { formatTime } from "../utils";

interface ITimer {
  active: boolean;
}

export const Timer: React.FC<ITimer> = ({ active }) => {
  const { time } = useSelector((state: RootState) => state.timer);

  const [remainingTime, setRemainingTime] = React.useState(time * 60); // Time in seconds

  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (active && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [remainingTime, active]);

  React.useEffect(() => {
    setRemainingTime(time * 60);
  }, [time]);

  return (
    <H1 active={active}>
      {formatTime(remainingTime).min}
      <br />
      {formatTime(remainingTime).sec}
    </H1>
  );
};

const H1 = styled.h1<{ active: boolean }>`
  font-weight: ${(p) => (p.active ? "800" : "200")};
  font-size: 256px;
  line-height: 85%;
  user-select: none;
  color: ${({ theme }) => theme.colors.text};
`;
