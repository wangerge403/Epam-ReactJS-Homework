import React from 'react';
import '../styles/MovieItem.css';

export default class MovieItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount() {
  }
  deleteCurrentMovie = (id) => {
    // ...action
    console.log('delete movie', id)
  } 
  editMovieInfo = () => {
    this.props.editMovieInfo();
  }
  render() {
    return (
      <div className="movie-item">
        <div>movie name: {this.props.title}</div>
        <div>score: {this.props.rating}</div>
        <div>
          <button onClick={this.editMovieInfo}>Edit</button>
          <button onClick={this.deleteCurrentMovie}>Delete</button>
        </div>
      </div>
    )
  }
}