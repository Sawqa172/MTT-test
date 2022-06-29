import styled from "styled-components";
import { Interface } from "readline";

interface IToggle {
  checked: boolean;
}

const ThemeToggleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ThemeToggleItem = styled.div`
  display: flex;
  align-items: center;
`;

const ThemeToggleText = styled.span`
  font-size: 16px;
  color: ${(p) => p.theme.colors.white};
  font-weight: 700;
`;

const ToggleInput = styled.input`
  display: none;
`;

const ToggleLabel = styled.label<IToggle>`
  background: ${(p) => (p.checked ? p.theme.colors.lightBlue : "#aeaeae")};
  border: 2px solid ${(p) => (p.checked ? p.theme.colors.lightBlue : "#9a9a9a")};
  height: 50px;
  width: 100px;
  display: block;
  border-radius: 50px;
  align-items: center;
  padding: 0;
  transition: 0.3s linear;
  margin: 0 20px;
`;

const ToggleSpan = styled.span<IToggle>`
  height: 30px;
  width: 30px;
  display: flex;
  background: ${(p) => (p.checked ? p.theme.colors.white : "#909090")};
  border: 0 solid ${(p) => (p.checked ? p.theme.colors.white : "#6b6b6b")};
  border-radius: 100px;
  transition: 0.5s all;
  margin-left: ${(p) => (p.checked ? "60px" : "5px")};
  margin-top: 8px;
  box-shadow: 2px 2px 3px #979797;
`;

export {
  ThemeToggleWrapper,
  ThemeToggleItem,
  ThemeToggleText,
  ToggleInput,
  ToggleLabel,
  ToggleSpan,
};
