import React from 'react';
import {useState, useEffect} from 'react';
import VoteButton from './VoteButton';



function App() {


const [teamArr, setTeamArr] = useState([])

useEffect(()=>{
  fetch('https://coding-assignment.g2crowd.com/')
  .then((response) => response.json())
  .then((json) => setTeamArr(json));
  console.log(teamArr)
}, [])


  return (
    <div className='card'>  
      <p className="title"> G2 Crowd Team Roster</p>
    

      {teamArr.map(member=> {
        return  <div> 
        <h2 className='member-name'>{member.name}</h2>
        <img className='member-img' src={member.image_url} alt="Team member"></img>
        <h4 className='member-title'>{member.title}</h4>
        <p className='member-bio'>{member.bio}</p>
        <p className='said-yes'></p>
        <VoteButton  key={member.name} teamMember={member}/>
        </div>
      })}
    
    </div>
  );
}

export default App;
