import React, { useState} from 'react';

import Person from './Person/Person';

import './App.css';

function App() {
  const [persons, setPersons] = useState([{name: "Aymen", age: "32"},{name: "Sana", age: "18"},{name: "Hanen", age: "25"}])
  
  const handleButtonClick = () => {
    setPersons(
      [
        {name: "Hamza", age: "23"},
        {name: "Khaled", age: "14"},
        {name: "Habib", age: "25"}
      ]
    )
  }

  const changeName = (event) => {
    setPersons(
      [
        {name: "Hamza", age: "23"},
        {name: "Khaled", age: "14"},
        {name: event.target.value, age: "25"}
      ]
    )
  }
  return (
       <div className="App">
         <h2>This is our App</h2>
         <button onClick={handleButtonClick}>Switch Names</button>

         {
           persons.map((person, index) => (
              <Person key={index} name={person.name} age={person.age} changeName={changeName} />
           ))
         }

      </div>
        
  );
}

export default App;
