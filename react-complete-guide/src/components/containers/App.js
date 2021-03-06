import React, { Component } from 'react';
import Person from "../components/Persons/Person/Person";
import classes from './App.css';
import Persons from '../components/Persons/Persons.js';



class App extends Component {
  state = {
      persons: [
        {id: "lolol", name: "Nat", age: 18},
        {id: "ponk", name: "Arch", age: 20},
        {id: "cheez", name: "Tim", age: 22}
      ],
    otherState: "diggity",
    showPersons: false
    };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
  }
  
  render() {

    let persons = null;
    let btnClass = " ";

    if (this.state.showPersons) {
        persons = (
          <div>
            <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
          </div>
        );

        btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);//classes = ["red"]
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ["red", "bold"]
    }


    return (
        <div className={classes.App}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(" ")}>This is really working!</p>
            <button className={btnClass} onClick={this.togglePersonsHandler}>
              Toggle Persons
            </button>
            {persons}
          </div>
      );
    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work now?"));
      }
}

export default App;


