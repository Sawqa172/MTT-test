import React, { useState } from "react";
import {
  ThemeToggleWrapper,
  ThemeToggleItem,
  ThemeToggleText,
  ToggleInput,
  ToggleLabel,
  ToggleSpan,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useThemeSlice } from "styles/Theme/slice";
import { saveTheme, getThemeFromStorage } from "styles/Theme/utils";

const ThemeToggle = () => {
  let initialTheme = getThemeFromStorage() ? "light" : "dark";
  let initialThemeBoolean = initialTheme === "dark" ? false : true;
  const [checked, setCheckedValue] = useState(initialThemeBoolean);
  const dispatch = useDispatch();
  const { actions } = useThemeSlice();

  const setValue = (param) => {
    setCheckedValue(param);
  };

  const ChangeTheme = (value) => {
    const data = value ? "light" : "dark";
    dispatch(actions.changeTheme(data));
    saveTheme(data);
  };

  return (
    <ThemeToggleWrapper>
      <ThemeToggleItem>
        <ThemeToggleText>Dark</ThemeToggleText>
        <ToggleInput
          type="checkbox"
          id="type2"
          className="toggle_checkbox"
          onChange={(e) => {
            setValue(e.target.checked);
            ChangeTheme(e.target.checked);
          }}
        />
        <ToggleLabel
          htmlFor="type2"
          className="toggle_label type2"
          checked={checked}>
          <ToggleSpan className="toggle_span type2" checked={checked} />
        </ToggleLabel>
        <ThemeToggleText>Light</ThemeToggleText>
      </ThemeToggleItem>
    </ThemeToggleWrapper>
  );
};

export default ThemeToggle;
