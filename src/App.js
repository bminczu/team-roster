import React from 'react';
import {useState, useEffect} from 'react';


function App() {


const [teamArr, setTeamArr] = useState([])

useEffect(()=>{
  fetch('https://coding-assignment.g2crowd.com/')
  .then((response) => response.json())
  .then((json) => setTeamArr(json));
  console.log(teamArr)
}, [])

  return (
    <div>  

    

      {teamArr.map(member=> {
        return  <li key={member.name}> 
        <h2>{member.name}</h2>
        <img src={member.image_url} alt="Team member"></img>
        <h4>{member.title}</h4>
        <p>{member.bio}</p>

        
        
        
        </li>
      })}
    
    </div>
  );
}

export default App;
