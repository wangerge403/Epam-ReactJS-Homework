import React from 'react';
import MovieItem from '../../components/movies/MovieItem';
import ModalBox from '../../components/ModalBox';
import '../../styles/movieslist.css';

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
    this.setState({
      isModalOpen: true
    })
  };
  handleConfirm = () => {
    // api
    this.setState({
      isModalOpen: false
    })
  };
  handleCancel = () => {
    this.setState({
      isModalOpen: false
    })
  };
  onChangeName = (e) => {
    let value = e.target.value;
    this.setState({ movieName: value });
  };

  onChangeScore = (e) => {
    let value = e.target.value;
    this.setState({ score: value });
  };
  onEditMovieInfo = (item) => {
    this.setState({
      isModalOpen: true,
      movieName: item.title,
      score: item.rating
    })
  }
  render() {
    const { movies, title, movieName, score, isModalOpen } = this.state;
    return (
      <div>
        <div>
          <button onClick={this.addMovie}>Add movie</button>
        </div>
        <div className="movies-wrap">
          {movies.map((item) =>{
            return <MovieItem editMovieInfo={this.onEditMovieInfo(item)} {...item} key={item.id}></MovieItem>
          })}
        </div>
        {/* <ModalBox title={title} isOpen={isModalOpen} onConfirm={this.handleConfirm} onCancel={this.handleCancel}>
          <label>name: </label><input onChange={(e) => this.onChangeName(e)} value={movieName} placeholder=""></input>
          <label>score: </label><input onChange={(e) => this.onChangeScore(e)} value={score} placeholder=""></input>
        </ModalBox> */}
      </div>
    );
  }
}

export default MovieList;
