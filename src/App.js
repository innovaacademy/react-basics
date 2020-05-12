import React, { useState, useEffect} from 'react';
import axios from 'axios';

import Person from './Person/Person';

import './App.css';

function App() {
  const [persons, setPersons] = useState([])
  const [fetchPerson, setFetchPerson] = useState(false);

  useEffect( () => {

    const fetchData = async () => {
      const results = await axios.get('https://reqres.in/api/users')
      setPersons(results.data.data)
    }

    if (fetchPerson === true ) {
      fetchData();
    }
    

  }, [ fetchPerson ])


  return (
       <div className="App">
         <h2>This is our App</h2>
         <button onClick={() => setFetchPerson(true)}>Fetch Persons</button>

        {
          persons.map( (item, index) => {   
            return <Person key={index} item={item} />
          })
        }
      </div>
        
  );
}

export default App;
