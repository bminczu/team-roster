import React from 'react'

export default function Roster() {


    fetch('https://coding-assignment.g2crowd.com/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });


    return (
        <div>
            
        </div>
    )
}
