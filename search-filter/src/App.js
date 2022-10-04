import MOCK_JSON from './MOCK_DATA.json'; 
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState(''); 

  return (
    <div className="App">
      <h1>Search Filter Project</h1>
      <input placeholder='Search' onChange={(e)=>{return setName(e.target.value)}}></input>
      <table>
        <th><h3>Names</h3></th>
      {MOCK_JSON.filter(val => { 
          if(name===''){
            return val; 
          }else if (val["first_name"].toLowerCase().includes(name.toLowerCase())){
            return val; 
          }
      }).map((id, val)=>{
        return <tr><p key={`${id["id"]}_${id["ip_address"]}`}>{id["first_name"]} </p></tr>
      })}
      </table>
    </div>
  );
}

export default App;
