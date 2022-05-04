import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';
import ErrorContainer from './ErrorContainer/ErrorContainer';


const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  },
`;

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Ram', age: '38' },
      { id: '2', name: 'Lakshman', age: '24' },
      { id: '3', name: 'Sham', age: '90' },
      { id: '4', name: 'Gita', age: '29' },
    ],
    isVisible: false,
  };

  deletePersonhandler = (personIndex) => {
    // const allPersons = this.state.persons.slice();
    const allPersons = [...this.state.persons];
    allPersons.splice(personIndex, 1);
    this.setState({ persons: allPersons });
  };

  togglePersonHandler = () => {
    const data = this.state.isVisible;
    this.setState({ isVisible: !data });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const personDetail = { ...this.state.persons[personIndex] };
    personDetail.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = personDetail;

    this.setState({
      persons: persons
    });
  }

  render() {
    let persons = null;
    if (this.state.isVisible) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorContainer key={person.id}><Person
              click={() => this.deletePersonhandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            </ErrorContainer>
            // changed={this.nameChangedHandler.bind(this, person.id)} />
          })}
        </div>
      );
    }
    return (
      <div className='App'>
        <h1>My First React Application</h1>
        <p>Hello Application!</p>
        <StyledButton
          alt={this.state.isVisible}
          onClick={this.togglePersonHandler}>Toggle Person!</StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
