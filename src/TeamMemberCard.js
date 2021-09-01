import React from 'react'
import VoteButton from './VoteButton'



export default function TeamMemberCard(memberObj) {


    const {name, image_url, title, bio} = memberObj.member
    return (
        
        <div > 
        <h2 className='member-name'> {console.log(name)} {name}</h2>
        <img className='member-img' src={image_url} alt="Team member"></img>
        <h4 className='member-title'>{title}</h4>
        <p className='member-bio'>{bio}</p>
        <p className='said-yes'></p>
        <VoteButton  key={name} memberObj={memberObj.member}/>
        </div>
    )
}

