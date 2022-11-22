import React, {useState} from 'react';
import '../styles/MovieItem.css';

export default function MovieItem (props) {
  const [state, setState] = useState({
    isMenuOpen: false
  });
  const deleteCurrentMovie = (id) => {
    // ...action
    console.log('delete movie', id)
  } 
  const editMovieInfo = () => {
    props.editMovieInfo();
  }
  return (
    <div className="movie-item">
      <img className='cover-img' src={props.coverImg} alt='cover image'/>
      <div>
        <div className='item-title'>movie name: {props.title}</div>
        <div className='date'>{props.date}</div>
      </div>
      <div className='genre'>{props.genre}</div>
      <div>
      </div>
      {state.isMenuOpen && <div className='item-menu'>
        <div className='close'>X</div>
        <div className='edit' onClick={editMovieInfo}>Edit</div>
        <div className='delete'>delete</div>
      </div>}
      
    </div>
  )
}