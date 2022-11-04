import React from 'react';
import List from '../components/movieList/List';

class MovieList extends React.Component {
  state = {
    movies: [
      { id: 0, title: 'first movie', rating: 9.0 },
      { id: 1, title: 'second movie', rating: 8.0 },
      { id: 2, title: 'third movie', rating: 7.0 }
    ]
  };

  render() {
    const { movies } = this.state;
    return (
      <div>
        <List movies={movies} />
      </div>
    );
  }
}

export default MovieList;
