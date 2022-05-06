import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.alt === 'true' ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt === 'true' ? 'salmon' : 'lightgreen'};
    color: black;
  },
`;

const cockpit = (props) => {
    return (
        <div>
            <h1>My First React Application</h1>
            <p>Hello Application!</p>
            <StyledButton
                alt={props.showPersons.toString()}
                onClick={props.clicked}>Toggle Person!</StyledButton>
        </div>
    );
};

export default cockpit;