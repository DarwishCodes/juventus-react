import React from "react";

const Module = ({ toggleModuleClick, selectPlayer, players, show }) => {
  let player = players.find((player) => {
    return player.playerIdNo === selectPlayer;
  });
  const cssClasses = [
    "pop-up",
    show === "entering" || show === "entered"
      ? "show-module"
      : show === "exiting"
      ? "hide-module"
      : null,
  ];
  const cssHeading = [
    "heading-secondry pop-up__heading u-margin-bottom-large",
    show === "entering" || show === "entered" ? "fill-to-right" : null,
  ];
  const infoBox1 = [
    "infobox",
    show === "entering" || show === "entered" ? "fade-to-top-1" : null,
  ];

  const infoBox2 = [
    "infobox",
    show === "entering" || show === "entered" ? "fade-to-top-2" : null,
  ];

  const infoBox3 = [
    "infobox",
    show === "entering" || show === "entered" ? "fade-to-top-3" : null,
  ];

  const infoBox4 = [
    "infobox",
    show === "entering" || show === "entered" ? "fade-to-top-4" : null,
  ];

  const infoBox5 = [
    "infobox",
    show === "entering" || show === "entered" ? "fade-to-top-5" : null,
  ];

  const infoBox6 = [
    "infobox",
    show === "entering" || show === "entered" ? "fade-to-top-6" : null,
  ];

  const playerShow = [
    "pop-up__img",
    show === "entering" || show === "entered" ? "full-shadow" : null,
  ];

  return (
    <div className={cssClasses.join(" ")}>
      <div className="pop-up__container" id="pop-up-container">
        <div className="row">
          <div className="popup__heading-box u-margin-top-medium">
            <h2 className={cssHeading.join(" ")}>{player.playerName}</h2>
          </div>
          <div className="pop-up__left">
            <div className="col-1-of-4">
              <div className={infoBox1.join(" ")} id="infobox-1">
                <span className="infobox__icon">
                  <i className="icon ion-ios-calendar"></i>
                </span>
                <span className="infobox__title">Born</span>
                <p className="infobox__paragraph" id="infobox-born">
                  {player.playerDate}
                </p>
                <p className="infobox__paragraph" id="infobox-age">
                  {player.palayerAge}
                </p>
              </div>

              <div className={infoBox2.join(" ")} id="infobox-3">
                <span className="infobox__icon">
                  <i className="icon ion-ios-man"></i>
                </span>
                <span className="infobox__title">Height</span>
                <p className="infobox__paragraph" id="infobox-height">
                  {player.playerHeight}
                </p>
              </div>

              <div className={infoBox3.join(" ")} id="infobox-5">
                <span className="infobox__icon">
                  <i className="icon ion-ios-radio-button-on"></i>
                </span>
                <span className="infobox__title">Position</span>
                <p className="infobox__paragraph" id="infobox-position">
                  {player.playerPosition}
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className={infoBox4.join(" ")} id="infobox-2">
                <span className="infobox__icon">
                  <i className="icon ion-ios-shirt"></i>
                </span>
                <span className="infobox__title">Number</span>
                <p className="infobox__paragraph" id="infobox-number">
                  {player.playerNumber}
                </p>
              </div>

              <div className={infoBox5.join(" ")} id="infobox-4">
                <span className="infobox__icon">
                  <i className="icon ion-ios-person-add"></i>
                </span>
                <span className="infobox__title">Joined</span>
                <p className="infobox__paragraph" id="infobox-joined">
                  {player.playerJoined}
                </p>
              </div>

              <div className={infoBox6.join(" ")} id="infobox-6">
                <span className="infobox__icon">
                  <i className="icon ion-ios-football"></i>
                </span>
                <span className="infobox__title">Goals</span>
                <p className="infobox__paragraph" id="infobox-goals">
                  {player.playerGoals}
                </p>
              </div>
            </div>
          </div>

          <div className="pop-up__right">
            <div className="col-1-of-2" id="compare-right">
              <img
                className={playerShow.join(" ")}
                id="pop-up-image"
                src={
                  "https://darwishcodes.github.io/juventus/" +
                  player.playerImage
                }
                alt="Ronaldo"
              />
            </div>
          </div>
        </div>
        <p
          className="pop-up__close"
          role="presentation"
          onClick={toggleModuleClick}
        >
          {" "}
          &#10005;
        </p>
      </div>
    </div>
  );
};

export default Module;
