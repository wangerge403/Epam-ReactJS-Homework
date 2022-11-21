import React from 'react';
import MovieItem from '../../components/movies/MovieItem';
// import ModalBox from '../../components/ModalBox';
import MovieModal from '../../components/movies/MovieModal';
import './index.css';

class MovieList extends React.Component {
  constructor(){
    super();
    this.state = {
      movies: [
        { id: 0, title: 'first movie', rating: 9.0 },
        { id: 1, title: 'second movie', rating: 8.0 },
        { id: 2, title: 'third movie', rating: 7.0 }
      ],
      title: '',
      isModalOpen: false,
      movieName: '',
      score: ''
    };
  }
  componentDidMount () {
    // 请求数据
  }
  addMovie = () => {
    
  };
  handleConfirm = () => {
    
  };
  handleCancel = () => {
    
  };
  onChangeName = (e) => {
    
  };

  onChangeScore = (e) => {
    
  };
  onEditMovieInfo = (item) => {
    
  }
  render() {
    const { movies, title, movieName, score, isModalOpen } = this.state;
    return (
      <div>
        <div>
          <button onClick={this.addMovie} className="add-btn">+ADD MOVIE</button>
          <input className='search-inp' type="text" />
          <button onClick={this.addMovie} className="search-btn">SEARCH</button>
        </div>
        <div className="">
          {movies.map((item) =>{
            return <MovieItem editMovieInfo={this.onEditMovieInfo(item)} {...item} key={item.id}></MovieItem>
          })}
        </div>
        <MovieModal />
      </div>
    );
  }
}

export default MovieList;
