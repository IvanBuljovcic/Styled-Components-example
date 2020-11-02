import React from 'react';
import styled from 'styled-components';

const ColorItemWrapper = styled.div`
  display: flex;
`;

const ColorItem = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 0 0.5em;

  background-color: ${(props: any) => props.color};
  border: 2px solid black;
`;

const colors = [
  '#D0021B',
  '#F5A623',
  '#7ED321',
  '#BD10E0',
  '#4A90E2',
  '#8B572A',
  '#2CD4AD'
]

const ColorPicker: React.FC<{dispatch: any}> = ({ dispatch }) => {
  return (
    <div>
      <h1>Pick a background color</h1>

      <ColorItemWrapper>
      {colors.map((color: string) => (
        <ColorItem key={color} color={color} onClick={() => dispatch({ type: 'SET_BACKGROUND_COLOR', payload: color })} />
      ))}
      </ColorItemWrapper>
    </div>
  )
}

export default ColorPicker;