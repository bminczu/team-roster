import React, { Component } from "react";
import { useState, useEffect } from "react";
import TeamMemberCard from "./TeamMemberCard";

function App() {
  const [teamArr, setTeamArr] = useState([]);

  const stored = JSON.parse(localStorage.getItem("team"));

  useEffect(async () => {
    if (stored) {
      setTeamArr(stored);
    } else {
      const response = await fetch("https://coding-assignment.g2crowd.com/", {
        method: "GET",
        mode: "no-cors",
      });
      const team = await response.json();
      const teamWithVotes = team.map((entry) => ({ ...entry, votes: 0 }));
      setTeamArr(teamWithVotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("team", teamArr);
  }, [teamArr]);

  return (
    <div>
      <p className="title"> G2 Crowd Team Roster</p>
      {teamArr.map((member) => {
        return <TeamMemberCard key={member.name} member={member} />;
      })}
    </div>
  );
}

export default App;

// get all state into Component
// grab the correct personalbar
// increment the vote Count
// update local storage value
