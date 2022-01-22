import React from "react";
import cards from "../cards";

const Cards = () => {
  const printRows = () => {
    return (
      <div className="card">
        {cards.map((cvrImg, index) =>
          (index + 1) % 4 !== 1 ? (
            <img src={cvrImg.coverimage} />
          ) : (
            <div className="card">
              <img src={cvrImg.coverimage} />
            </div>
          )
        )}
      </div>
    );
  };

  return (
    <div>
      <div>{/* {printRows()} */}</div>
      <div className="card">
        <img src={cards[0].coverimage} />
        <img src={cards[1].coverimage} />
        <img src={cards[2].coverimage} />
        <img src={cards[3].coverimage} />
      </div>
      <div className="card">
        <img src={cards[4].coverimage} />
        <img src={cards[5].coverimage} />
        <img src={cards[6].coverimage} />
        <img src={cards[7].coverimage} />
      </div>
      <div className="card">
        <img src={cards[8].coverimage} />
        <img src={cards[9].coverimage} />
        <img src={cards[10].coverimage} />
        <img src={cards[11].coverimage} />
      </div>
      <div className="card">
        <img src={cards[12].coverimage} />
        <img src={cards[13].coverimage} />
        <img src={cards[14].coverimage} />
        <img src={cards[15].coverimage} />
      </div>
    </div>
  );
};

export default Cards;
