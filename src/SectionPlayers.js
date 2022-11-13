import React from "react";
import Card from "./Card";

const SectionPlayers = ({
  playerQuery,
  result,
  position,
  selectPlayerClick,
  toggleModuleClick,
}) => {
  return (
    <div className="section-players">
      {/* <span id="arr-left-forward" className="players__arrow players__arrow--left"></span>
            <span id="arr-right-forward" className="players__arrow players__arrow--right"></span> */}
      <div className="players__row" id="slide-forward">
        <div className="players__box">
          <div className=" u-margin-top-medium">
            <h2 className="heading-secondry">
              {position == ""
                ? `You searched for - ${playerQuery} -`
                : position}
            </h2>
          </div>
          <div className="players__container" id="forward-container">
            {playerQuery === ""
              ? ""
              : result
                  .filter((player) => player.playerPosition.includes(position))
                  .map((player) => (
                    <Card
                      key={player.playerIdNo}
                      id={player.playerIdNo}
                      firstname={player.playerFirstName}
                      image={player.playerImage}
                      name={player.playerName}
                      selectPlayerClick={selectPlayerClick}
                      toggleModuleClick={toggleModuleClick}
                    />
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPlayers;
