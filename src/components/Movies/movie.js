import React from 'react';

const Movie = props => {

    return (
     <a className={ props.current === props.info.episode_id ? "active item" : "item"  } onClick={props.click}>
        { props.info.title }         
     </a>
           
    )
}

export default Movie;
