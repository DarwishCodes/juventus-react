import React from "react";
import SearchPlayer from "./SearchPlayer";
import JuveLogo from "./Juve-Logo.svg";

const Header = ({ playerQuery, setPlayerQuery }) => {
  return (
    <header className="header">
      <div className="row">
        <div className="navigation">
          <div className="navigation__search">
            <SearchPlayer
              playerQuery={playerQuery}
              setPlayerQuery={setPlayerQuery}
            />
          </div>
          <div className="navigation__icon">
            <img
              className="navigation__logo"
              src={JuveLogo}
              alt="Juventus Logo"
            />
          </div>
        </div>
      </div>
      <div className="u-center-text">
        <h2 className="heading-secondry">2018 Team Squad</h2>
      </div>
    </header>
  );
};

export default Header;
