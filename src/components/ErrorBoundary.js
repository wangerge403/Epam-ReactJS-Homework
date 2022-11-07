import React, { Component } from 'react';

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  //在render错误是会执行
  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return <div>Somthing Error</div>
    }
    return this.props.children;
  }
}
