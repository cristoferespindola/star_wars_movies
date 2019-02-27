import React from "react";

import { Header, List, Popup } from "semantic-ui-react";

const MovieDetails = props => {
  return (
    <React.Fragment>
      <Header size="tiny">Tecnical Info</Header>
      <List verticalAlign="middle">
        <List.Item>
          <Popup
            trigger={<List.Icon name="calendar outline" />}
            content="Release Date"
          />
          <List.Content>{props.release}</List.Content>
        </List.Item>
        <List.Item>
          <Popup trigger={<List.Icon name="bullhorn" />} content="Director" />
          <List.Content>{props.director}</List.Content>
        </List.Item>
        <List.Item>
          <Popup trigger={<List.Icon name="users" />} content="Producer" />
          <List.Content>{props.producer}</List.Content>
        </List.Item>
      </List>
    </React.Fragment>
  );
};

export default MovieDetails;
