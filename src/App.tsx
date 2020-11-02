import React, { useReducer, useState } from "react";

import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import * as themes from "./themes";
import ColorPicker from "./ColorPicker";

const initialState = {
  backgroundColor: '#FFF',
}

const themeReducer = (state: typeof initialState = initialState, action: any) => {
  switch (action.type) {
    case 'SET_BACKGROUND_COLOR':
      return {...state, backgroundColor: action.payload}
    
    default:
      return state;
  }
}


// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: any) => props.theme.backgroundColor}
  }
`;

const StyledH1 = styled.h1`
  color: ${(props: any) => props.theme.primary};
`;

type Theme = "dark" | "light" | "party";

const App = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const extendTheme = {
    ...themes[theme],
    backgroundColor: state.backgroundColor,
  }
  
  return (
    <ThemeProvider theme={extendTheme}>
      <div className="App">
        <GlobalStyle />
        <header className="App-header">
          <StyledH1>React Themes Demo</StyledH1>
          <img src={logo} className="App-logo" alt="logo" />

          <button onClick={() => setTheme("dark")}>Dark</button>
          <button onClick={() => setTheme("light")}>Light</button>
          <button onClick={() => setTheme("party")}>Party</button>
          
          <ColorPicker dispatch={dispatch} />
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
