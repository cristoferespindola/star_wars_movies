import React from "react";

const Movie = props => {
  const cover = require(`../.././assets/img/episode_${
    props.info.episode_id
  }.jpg`);
  return (
    <div className="ui card">
      <img src={cover} class="ui image" alt={props.info.title} />
      <div className="content">
        <div className="header">{props.info.title}</div>
        <div className="meta">Relesase {props.info.release_date}</div>
        <div className="description" />
      </div>
    </div>
  );
};

export default Movie;
