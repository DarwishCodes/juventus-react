import React, { useState } from "react";
import { Transition } from "react-transition-group";
import "./main.scss";
import Header from "./Header";
import Module from "./Module";
import Main from "./Main";
import "./server";

const App = () => {
  const [playerQuery, setPlayerQuery] = useState("");
  const [selectPlayer, setSelectPlayer] = useState(0);
  const [players, setPlayers] = useState([]);
  const [module, toggleModule] = useState(false);

  const hideModuleHandler = () => {
    toggleModule(false);
  };

  const showModuleHandler = () => {
    toggleModule(true);
  };
  return (
    <div>
      <Transition
        in={module}
        timeout={{ enter: 800, exit: 300 }}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <Module
            show={state}
            selectPlayer={selectPlayer}
            toggleModuleClick={hideModuleHandler}
            module={module}
            players={players}
          />
        )}
      </Transition>

      <Header playerQuery={playerQuery} setPlayerQuery={setPlayerQuery} />

      <main>
        <Main
          selectPlayer={selectPlayer}
          setSelectPlayer={setSelectPlayer}
          playerQuery={playerQuery}
          toggleModuleClick={showModuleHandler}
          players={players}
          setPlayers={setPlayers}
        />
      </main>
    </div>
  );
};

export default App;
