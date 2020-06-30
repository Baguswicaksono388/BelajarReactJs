import React, { Component } from 'react';
import './LifeCycleComp.css';

class LifeCycleComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDrivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }
    render() {     // render adlh bagian yang wajib di tambahkan ketika membuat class dalam LifeCycle Component
        console.log('render');
        return (
            <button className="btn">Component Button {this.state.count}</button>
        )
    }
}

export default LifeCycleComp;