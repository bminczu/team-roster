import React from 'react';
import {useState, useEffect} from 'react';
import TeamMemberCard from './TeamMemberCard'


function App() {


const [teamArr, setTeamArr] = useState([])

useEffect(()=>{
  fetch('https://coding-assignment.g2crowd.com/')
  .then((response) => response.json())
  .then((json) => setTeamArr(json.map(object => ({...object, votes: 0}))));
  // .then((json) => setTeamArr(json));
  
  
}, [])

// let newTeamArr = teamArr.map(object =>({...object, votes: 0})
   
//   )
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
