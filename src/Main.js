import React, { useEffect, useState } from "react";
import axios from "axios";
import SectionPlayers from "./SectionPlayers";

const Main = ({
  playerQuery,
  setSelectPlayer,
  toggleModuleClick,
  players,
  setPlayers,
}) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios.get("/api/players").then((response) => {
      setResult(response.data.players);
      setPlayers(response.data.players);
    });
  }, []);

  useEffect(() => {
    const resultPlayers = players.filter((player) =>
      player.playerName.toLocaleLowerCase().includes(playerQuery.toLowerCase())
    );
    setResult(resultPlayers);
  }, [playerQuery]);

  const selectPlayerHandler = (id) => {
    setSelectPlayer(id);
  };

  return (
    <div>
      {playerQuery !== "" ? (
        <SectionPlayers
          playerQuery={playerQuery}
          result={result}
          position={""}
          toggleModuleClick={toggleModuleClick}
          selectPlayerClick={selectPlayerHandler}
        />
      ) : (
        <div>
          <SectionPlayers
            selectPlayerClick={selectPlayerHandler}
            result={result}
            position={"Forward"}
            toggleModuleClick={toggleModuleClick}
          />
          <SectionPlayers
            selectPlayerClick={selectPlayerHandler}
            result={result}
            position={"Midfielder"}
            toggleModuleClick={toggleModuleClick}
          />
          <SectionPlayers
            selectPlayerClick={selectPlayerHandler}
            result={result}
            position={"Defender"}
            toggleModuleClick={toggleModuleClick}
          />
          <SectionPlayers
            selectPlayerClick={selectPlayerHandler}
            result={result}
            position={"Goalkeeper"}
            toggleModuleClick={toggleModuleClick}
          />
        </div>
      )}
    </div>
  );
};

export default Main;
