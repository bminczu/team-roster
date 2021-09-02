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


console.log(teamArr)


  return (
    <div>  
      <p className="title"> G2 Crowd Team Roster</p>
    

      {teamArr.map(member=> {
   
        return  <TeamMemberCard key={member.name} member={member} />
        
      })}
    
    </div>
  );
}

export default App;
