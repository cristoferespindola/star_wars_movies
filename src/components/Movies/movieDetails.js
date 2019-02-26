import React from 'react';

const MovieDetails = props => {

    return (
        <div>
            <div className="ui card">
                <div class="content">
                    <div class="header">Episode { props.info.episode_id } </div>
                    <div class="meta">
                        <span>Release date </span>
                        <a>fair</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MovieDetails;