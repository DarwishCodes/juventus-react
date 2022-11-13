import React from "react";

const Card = ({ name, image, age, date, position }) => {
  return (
    <div className="players__card" id={id} key={id}>
      <p className="players__caption">{firstname}</p>
      <span className="players__check-box">
        <i className="icon ion-ios-checkmark players__check-box-icon"></i>
      </span>
      <img
        className="players__img"
        src={image}
        alt={name}
        onClick={() => {
          selectPlayerClick(id);
          toggleModuleClick();
        }}
      />
    </div>
  );
};

export default Card;
