import React from 'react';
import Roster from './Roster'
import {useState, useEffect} from 'react';

function App() {

  const [teamArr, setTeamArr] = useState([])

  useEffect(()=> {

    fetch('https://coding-assignment.g2crowd.com/')
    .then((response) => {
      return response.json();
    })
    .then((teamData) => {
       setTeamArr(teamData)
       console.log(teamArr)

    });
  }, [...teamArr])


  return (
    <>
    
    </>
  );
}

export default App;
