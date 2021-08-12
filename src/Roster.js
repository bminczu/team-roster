// import React from 'react'
// import TeamMember from './TeamMember'

export default function Roster() {


    let list = () => {fetch('https://coding-assignment.g2crowd.com/')
    .then((response) => {
      return response.json();
    })
    .then((teamData) => {
      teamData.map(teamObj => {
          return console.log(teamObj)
      })
    })};

    return (
        <div>
            
                
                
            <p>{list()} </p>
            
            </div>
    )

}
