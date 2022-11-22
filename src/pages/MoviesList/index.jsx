import React, {useState} from 'react';
import MovieItem from '../../components/movies/MovieItem';
// import ModalBox from '../../components/ModalBox';
import MovieModal from '../../components/movies/MovieModal';
import DeleteMovieModal from '../../components/movies/DeleteMovieModal';
import './index.css';

export default function MovieList () {
  const [dataSate, setDataState] = useState({
    movies: [
      { id: 0, title: 'first movie', rating: 9.0, genre: '123', date: '1994' },
      { id: 1, title: 'second movie', rating: 8.0, genre: '123', date: '1992' },
      { id: 2, title: 'third movie', rating: 7.0, genre: '123', date: '1998' }
    ],
    title: '',
    movieName: '',
    score: ''
  });
  const [modalStatus, setModalStatus] = useState({
    isAddModalOpen: false,
    isDelModalOpen: false,
  });
  const addMovie = () => {
    setModalStatus({
      isAddModalOpen: true
    })
  };
  // const handleConfirm = () => {
    
  // };
  // const handleCancel = () => {
    
  // };
  // const onChangeName = (e) => {
    
  // };

  // const onChangeScore = (e) => {
    
  // };
  const onEditMovieInfo = (item) => {
    
  };
  // const { movies, title, movieName, score, isModalOpen } = dataSate;
  return (
    <div className='container'>
      <div className='top-warp'>
        <button onClick={addMovie} className="add-btn">+ADD MOVIE</button>
        <div className="serch-wrap">
          <div className="search-title">FIND YOUR MOVIE</div>
          <input className='search-inp' type="text" placeholder='What do you want to watch?' />
          <button onClick={addMovie} className="search-btn">SEARCH</button>
        </div>
      </div>
      <div className="movie-content">
        <div className='nav-warp'>
          <div className="left-filter">
            <span className='tab-name'>ALL</span>
            <span className='tab-name'>DOCUMENTARY</span>
            <span className='tab-name'>COMEDY</span>
            <span className='tab-name'>HORROR</span>
            <span className='tab-name'>CRIME</span>
          </div>
          <div className="sort-wrap">
            <span className='sort-txt'>SORT BY</span>
            <select className='sort-sel'>
              <option value="" label='RELEASE DATE'></option>
            </select>
          </div>
        </div>
        <div className="line"></div>
        <div className="result-count">39 movies found</div>
        <div className="result-list">
        {dataSate.movies.map((item) =>{
          return <MovieItem editMovieInfo={onEditMovieInfo(item)} {...item} key={item.id}></MovieItem>
        })}
        </div>
      </div>
      {/* <div className="">
        
      </div> */}
      {/* <MovieModal info={} /> */}
      {modalStatus.isDelModalOpen && <DeleteMovieModal movieId = {0} />}
    </div>
  );
}
