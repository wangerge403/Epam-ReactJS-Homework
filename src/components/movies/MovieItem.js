import React from 'react';

export default class MovieItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>movie name: {this.props.title}</div>
        <div>score: {this.props.rating}</div>
        <div>
          <button >Edit</button>
          <button>Delete</button>
        </div>
      </div>
    )
  }
}