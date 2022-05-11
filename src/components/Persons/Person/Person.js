import React, { useContext } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';
// import styled from 'styled-components';

// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 15px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px) {
//         width: 450px;
//     }
// `;
const person = (props) => {
    console.log('Render Person');
    const context = useContext(AuthContext);
    return (
        <Aux>
            {context.authenticated ? <p>Authenticated</p> : <p>Please Login</p>}
            <p onClick={props.click}>I am {props.name} and I am {props.age} Years old!</p>
            <p>{props.children}</p>
            <input type='text' value={props.name} onChange={props.changed} />
        </Aux>
    );
};

export default withClass(person, classes.Person);