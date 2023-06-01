import * as React from "react";
import {
  primary_dark,
  primary_light,
  secondary_dark,
  secondary_light,
  tertiary_dark,
  tertiary_light,
} from "../styles/Theme.styled";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const useToggleTime = () => {
  const { isLight } = useSelector((state: RootState) => state.timer);

  const [currentState, setCurrentState] = React.useState("Focus");
  const [nextToggleType, setNextToggleType] = React.useState("Short break");
  const [prevToggleType, setPrevToggleType] = React.useState("");
  const [selectedTheme, setSelectedTheme] = React.useState<any>(primary_light);

  const toggleState = React.useCallback(() => {
    setCurrentState(nextToggleType);

    if (nextToggleType === "Short break") {
      setNextToggleType("Focus");
    } else if (nextToggleType === "Focus") {
      setNextToggleType("Long break");
    } else if (nextToggleType === "Long break") {
      setNextToggleType("Focus");
      setPrevToggleType("Long break");
    }

    if (prevToggleType === "Long break") {
      setCurrentState("Focus");
      setNextToggleType("Short break");
      setPrevToggleType("");
    }
  }, [nextToggleType]);

  React.useLayoutEffect(() => {
    switch (currentState) {
      case "Short break":
        return isLight
          ? setSelectedTheme(secondary_light)
          : setSelectedTheme(secondary_dark);

      case "Long break":
        return isLight
          ? setSelectedTheme(tertiary_light)
          : setSelectedTheme(tertiary_dark);

      default:
        isLight
          ? setSelectedTheme(primary_light)
          : setSelectedTheme(primary_dark);
    }
  }, [currentState, isLight]);

  return [currentState, selectedTheme, toggleState];
};

export default useToggleTime;
