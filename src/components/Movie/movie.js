import React from "react";
import MovieDetails from "../MovieDetails/movieDetails";
import { Divider, Header, Image, Grid, Container } from "semantic-ui-react";

const Movie = props => {
  const cover = require(`../../assets/img/episode_${
    props.info.episode_id
  }.jpg`);

  return (
    <React.Fragment>
      <Grid>
        <Grid.Row>
          <Grid.Column computer={4} mobile={16} tablet={8}>
            <Image src={cover} centered />
          </Grid.Column>
          <Grid.Column computer={9} mobile={16} tablet={8}>
            <Header as="h2" textAlign="center" size="large">
              {props.info.title}
            </Header>
            <Header as="h3" textAlign="center" size="small">
              Episode {props.info.episode_id}
            </Header>
            <Container className="textCrawl" fluid>
              {props.info.opening_crawl}
            </Container>
          </Grid.Column>
          <Grid.Column computer={3} mobile={16} tablet={8}>
            <MovieDetails
              producer={props.info.producer}
              director={props.info.director}
              release={props.info.release_date}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider section />
    </React.Fragment>
  );
};

export default Movie;
