import React from "react";
import Cards from "../card/card.component";

export const CardList = (props) => {
  return (
    <div>
      {props.Anime.map((anime) => (
        <Cards
          pack={anime}
          name={anime.attributes.slug}
          poster={anime.attributes.posterImage.large}
        />
      ))}
    </div>
  );
};
