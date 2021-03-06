import React from 'react'
import {useState, useEffect} from 'react';
import { useLocalStorage } from './useLocalStorage';


export default function VoteButton(props) {

    const [individual, setIndividual] = useState()
    const initialState = Number(window.localStorage.getItem("vote")) || 0
    const [vote, setVote] = useState(initialState)

    const [allData, setAllData] = useState()
   
    let teamState = props.teamMember

    // console.log(teamState)

    useEffect(()=>{
        window.localStorage.setItem("vote", vote)
    },[vote]) 

    let addVote = () => {
        setVote(vote + 1)
        // console.log(props)

    }


    ///right now when clicking vote, vote key in local storageis set to the number of times clicked. Not discerning between the different 
    ///team members.
    return (


        <div >
            <p>{vote}</p>
        {/* <?xml version="1.0" encoding="utf-8"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> */}
        <svg onClick={addVote}  className="vote-button" xmlns="http://www.w3.org/2000/svg" id="icon-thumbs-up" viewBox="0 0 512 512">
          <path d="m496 336c0-16-9-31-23-40 5-7 7-15 7-24 0-27-21-48-48-48l-94 0c11-40 17-82 17-125 0-37-30-67-67-67-37 0-67 30-67 67 0 52-19 92-58 119-10 7-22 14-35 19l0-45-128 0 0 320 128 0 0-31c30 1 44 9 59 16 14 8 28 15 53 15l160 0c27 0 48-21 48-48 0-6-1-12-3-18 20-5 35-24 35-46 0-9-2-17-7-24 14-9 23-24 23-40z m-448 144c-9 0-16-7-16-16 0-9 7-16 16-16 9 0 16 7 16 16 0 9-7 16-16 16z m396-128l-28 0 0 32 16 0c9 0 16 7 16 16 0 9-7 16-16 16l-32 0 0 32c9 0 16 7 16 16 0 9-7 16-16 16l-160 0c-17 0-26-5-39-11-16-8-35-18-73-21l0-171c21-7 41-16 57-28 49-34 74-86 74-150 0-16 13-29 29-29 16 0 29 13 29 29 0 43-6 85-18 125-4 12-7 23-8 32l141 0c9 0 16 7 16 16 0 9-7 16-16 16l-16 0 0 32 28 0c11 0 20 7 20 16 0 9-9 16-20 16z"/>
        </svg>  
        </div>
        
    )
}


