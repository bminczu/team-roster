import React, { Component } from 'react';
import {useState, useEffect} from 'react';
import TeamMemberCard from './TeamMemberCard'


function App() {


  const stored = JSON.parse(localStorage.getItem("team"))
const [teamArr, setTeamArr] = useState([stored])


useEffect(()=> {
  localStorage.setItem("team", JSON.stringify(teamArr))
 })

useEffect(()=>{
  
  if (stored){
    setTeamArr(stored)
    console.log("stored")
  } else 
    console.log("API")
  fetch('https://coding-assignment.g2crowd.com/')
  .then((response) => response.json())
  .then((json) => setTeamArr(json.map(object => ({...object, votes: 0}))));
  
  
}, [])


 console.log(teamArr)
//   )




  return (
    <div>  
      <p className="title"> G2 Crowd Team Roster</p>
    

      {teamArr.map(member=> {
   
        return  <TeamMemberCard key={member.name} member={member}/>
        
      })}
    
    </div>
  );
}

export default App;

// get all state into Component
// grab the correct personalbar
// increment the vote Count 
// update local storage value
