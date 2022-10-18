/**
 * React.createElement
 * React.Component
 * React.PureComponent
 * Functional component
 */

import React from "react";

function Task1CreateEle (props) {
    let child1 = React.createElement('li', null, props.name),
        child2 = React.createElement('li', null, props.name),
        ulBox = React.createElement('ul', null, child1, child2);

    return ulBox;
}


class Task1Comp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.handleReduce = this.handleReduce.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleReduce () {
        this.setState({
            count: this.state.count - 1
        })
    }
    handleAdd () {
        this.setState({
            count: this.state.count + 1
        })
    }
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    render(){
        return (
            <div>
                <div>Hello, {this.state.name}</div>
                <button style={{width: '60px'}} onClick={this.handleReduce}>Reduce</button>
                <button style={{margin: '0 10px'}}>{this.state.count}</button>
                <button style={{width: '60px'}} onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

class Task1PureComp extends React.PureComponent{
    render(){
        return(
            <div>{ this.props.name }</div>
        )
    }
}

const Task1Func = (props) => {
    return (
        <div>
            <div>Hello, {props.name}</div>
        </div>
    )
}

export {Task1CreateEle, Task1Comp, Task1PureComp, Task1Func};