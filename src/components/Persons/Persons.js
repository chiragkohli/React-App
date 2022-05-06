import React from 'react';

import Person from './Person/Person';
import ErrorContainer from '../ErrorContainer/ErrorContainer';

const persons = (props) => {
    console.log('Render Persons');
    return props.persons.map((person, index) => {
        return (<ErrorContainer key={person.id}><Person
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            changed={(event) => props.changed(event, person.id)} />
        </ErrorContainer>
        );
    });
}

export default persons;