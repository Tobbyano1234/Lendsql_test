import React from "react";
import "../../Styles/Card.scss";
import { cardItems } from "../../Utils/Data";

const Card = () => {
  return (
    <div className="card-container">
      {cardItems.map((item) => {
        return (
          <div className="card-container--carousel" key={item.id}>
            <p className="card-container--carousel--icon">{item.icon}</p>
            <p className="card-container--carousel--value">{item.value}</p>
            <p className="card-container--carousel--count">{item.count}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
