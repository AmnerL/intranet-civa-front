import React, { useState } from 'react';
import './App.css';

interface Person{
  name: string,
  dni: number
}

function App() {
  const [person, setPerson] = useState<Person | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    if(person){
      setPerson({
        ...person,
        [e.target.name]: e.target.value,
      });
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>learn react</h2>
      </header>

      <body>
        <div>
          <form>
              <label>
                Name:
                <input 
                type='text' 
                name='name'
                value={person?.name } 
                onChange={handleChange}/>
              </label>
              <br/>
              <label>
                DNI:
                <input 
                type='number'
                value={person?.dni}
                onChange={handleChange}/>
              </label>
              <br/>
              <button>Acept</button>
          </form>

        </div>
        
      </body>
    </div>
  );
}

export default App;
