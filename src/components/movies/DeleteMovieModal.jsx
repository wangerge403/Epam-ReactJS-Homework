import React, {useState} from 'react';
import '../styles/publicModal.css';
import '../styles/deleteMovie.css';

export default function DeleteMovieModal (props) {
	const id = props.movieId;
	// request for delete this movie
	const confirm = () => {

	};
	const handleClose = () => {

	};
	return (
		<div className="mask">
			<div className="content">
				<div className="close-icon" onClick={handleClose}>X</div>
					<div className="title">DELETE MOVIE</div>
					<div className="txt">Are you sure you want to delete this movie?</div>
					<div className="btn-wrap cursor-point">
						<button className='ok-btn' onClick={confirm}>CONFIRM</button>
					</div>
				</div>
		</div>
	);
}