import React from "react";

const SearchPlayer = ({ playerQuery, setPlayerQuery }) => {
  return (
    <div className="search" id="search">
      <div className="search__input-wraper">
        <input
          type="text"
          className="search__input"
          placeholder="Search player"
          id="search-player"
          value={playerQuery}
          onChange={(e) => setPlayerQuery(e.target.value)}
          onBlur={(e) => setPlayerQuery(e.target.value)}
        />
        <span className="search__icon">
          <i className="icon ion-ios-search"></i>
        </span>
      </div>
    </div>
  );
};

export default SearchPlayer;
