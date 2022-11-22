import React, {useState} from 'react';
import '../styles/publicModal.css';
import '../styles/addMovie.css';

export default function MovieModal () {
  const [movieInfo, setMovieInfo] = useState({
    title: '',
    date: '',
    url: '',
    rating: '',
    genre: '',
    runtime: '',
    description: ''
  });

  const handleChange = (e) => {
    e.persist();
    setMovieInfo({
        ...movieInfo,
        [e.target.name]:(e.target.value)
    });
    console.log(e.target.name)
    console.log(e.target.value)
  };
  const handleReset = () => {
    setMovieInfo({
      title: '',
      date: '',
      url: '',
      rating: '',
      genre: '',
      runtime: '',
      description: ''
    });
  };
  const checkContent = () => {
    for(let key in movieInfo){
      if(!movieInfo[key]){
        return false;
      }
    }
  };
  const handleSubmit = () => {
    if (!checkContent()) {
      alert('Please fill in the form completely!');
    }
  };
  return (
    <div className="mask">
      <div className='content'>
        <div className="title">ADD MOVIE</div>
        <div className="wrap">
          <div className="left-wrap">
            <div className="sub-title">TITLE</div>
            <input type="text" className='inp left-inp' name='title' onChange={handleChange} value={movieInfo.title} placeholder='title' />
            <div className="sub-title">MOVIE URL</div>
            <input type="text" className='inp left-inp' name='url' onChange={handleChange} value={movieInfo.url} placeholder='https://' />
            <div className="sub-title">GENRE</div>
            <input type="text" className='inp left-inp' name='genre' onChange={handleChange} value={movieInfo.genre} placeholder='genre' />
          </div>
          <div className="right-wrap">
          <div className="sub-title">RELEASE DATE</div>
            <input type="text" className='inp right-inp' name='date' onChange={handleChange} value={movieInfo.date} placeholder='Date: 1999' />
            <div className="sub-title">RATING</div>
            <input type="text" className='inp right-inp' name='rating' onChange={handleChange} value={movieInfo.rating} placeholder='7.8' />
            <div className="sub-title">RUNTIME</div>
            <input type="text" className='inp right-inp' name='runtime' onChange={handleChange} value={movieInfo.runtime} placeholder='minutes' />
          </div>
        </div>
        <div>
          <div className="sub-title">OVERVIEW</div>
          <textarea name="description" id="" cols="30" rows="5" onChange={handleChange} value={movieInfo.description} className='inp bottom-inp' placeholder='Movie description'></textarea>
        </div>
        <div className="btn-wrap">
          <button className='btn reset-btn' onClick={handleReset}>RESET</button>
          <button className='btn submit-btn' onClick={handleSubmit}>SUBMIT</button>
        </div>
        <div className="close-icon">X</div>
      </div>
    </div>
  )
}