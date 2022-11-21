import React from 'react';
import '../styles/addMovie.css';

export default class MovieModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="mask">
        <div className='content'></div>
      </div>
    )
  }
}