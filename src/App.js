import React from 'react';
import {useState, useEffect} from 'react';
import TeamMemberCard from './TeamMemberCard'


function App() {


const [teamArr, setTeamArr] = useState([])

useEffect(()=>{
  fetch('https://coding-assignment.g2crowd.com/')
  .then((response) => response.json())
  .then((json) => setTeamArr(json));
 
}, [])


  return (
    <div className='card'>  
      <p className="title"> G2 Crowd Team Roster</p>
    

      {teamArr.map(memberObj=> {
   
        return  <TeamMemberCard key={memberObj.name} member={memberObj} />
        
      })}
    
    </div>
  );
}

export default App;
