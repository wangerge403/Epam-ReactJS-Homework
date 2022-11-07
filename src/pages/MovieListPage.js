import React from 'react';
import MovieItem from '../components/movies/MovieItem';
import ModalBox from '../components/ModalBox'

class MovieList extends React.Component {
  state = {
    movies: [
      { id: 0, title: 'first movie', rating: 9.0 },
      { id: 1, title: 'second movie', rating: 8.0 },
      { id: 2, title: 'third movie', rating: 7.0 }
    ],
    title: '',
    isModalOpen: false
  };

  addMovie() {
    // 添加电影
  };
  handleConfirm() {
    this.setState({
      isModalOpen: false
    })
  };
  handleCancel() {
    this.setState({
      isModalOpen: false
    })
  };
  
  render() {
    const { movies, title } = this.state;
    return (
      <div>
        <div>
          <button onClick={addMovie}>Add movie</button>
        </div>
        <div>
          {movies.map((item) =>{
            return <MovieItem {...item} key={item.id}></MovieItem>
          })}
        </div>
        <ModalBox title={title} open={isModalOpen} onConfirm={handleConfirm} onCancel={handleCancel}>
          <label>name: </label><input value={movieName} placeholder=""></input>
          <label>score: </label><input value={score} placeholder=""></input>
        </ModalBox>
      </div>
    );
  }
}

export default MovieList;
