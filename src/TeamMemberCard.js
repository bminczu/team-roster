import React from 'react'
import VoteButton from './VoteButton'
import {useState} from 'react'



export default function TeamMemberCard(member) {


const storedTeam = JSON.parse(localStorage.getItem("team"))

const [updatedTeam, setUpdatedTeam] = useState(storedTeam)

console.log(storedTeam, 'storedteam')


const thisMember = () => storedTeam.map(obj => {
    if (obj.name == member.member.name)
   return console.log(obj.name)
     
})

thisMember()

 const addLikes = () => {
    return thisMember.votes + 1
    console.log(thisMember.votes)
}


    
    const {name, image_url, title, bio, votes} = member.member
    return (
        
        <div key={name} className='card'> 
        <h2 className='member-name'>  {name}</h2>
        <img className='member-img' src={image_url} alt="Team member"></img>
        <h4 className='member-title'>{title}</h4>
        <p className='member-bio'>{bio}</p>
        <p className='said-yes'></p>
        <p>{votes}</p>
        <button key={name} onClick={addLikes} member={member.member}> {votes} Likes </button>
        </div>
    )
}

