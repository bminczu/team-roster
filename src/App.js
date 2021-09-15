import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import TeamMemberCard from "./TeamMemberCard";

function App() {
  const [teamArr, setTeamArr] = useState([]);

  // initial retrieval from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("team"));
    if (stored) setTeamArr(stored);
  }, []);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const { data: team } = await axios.get(
          "https://coding-assignment.g2crowd.com/"
        );

        const teamWithVotes = team.map((entry) => ({ ...entry, votes: 0 }));

        localStorage.setItem("team", JSON.stringify(teamWithVotes));
      } catch (err) {
        console.error(err);
      }
    };
    fetchTeam();
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
