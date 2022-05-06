import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxillary';

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
    console.log('Render app');
    let persons = null;
    if (this.state.isVisible) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonhandler}
            changed={this.nameChangedHandler} />
        </div>
      );
    }
    return (
      <Aux>
        <Cockpit
          showPersons={this.state.isVisible}
          clicked={this.togglePersonHandler} />
        {persons}
      </Aux>
    );
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    return state;
  }

  componentDidMount() {
    console.log('Did Mount');
  }
}

export default withClass(App, classes.App);
