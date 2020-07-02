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
        console.log('componentDidMount');
        // pertama yang diperhatikan, jika mengupdate nilai pada state yang paling baik adlh disini
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 3000) //setelah 3 detik baru akan di update
    }

    shouldComponentUpdate(nextProps, nextState) {
        // ketika sudah megupdate sebuah komponen, maka akan lari ke sini
        console.group('shouldComponentUpdate');
        console.log('nextState', nextState);
        console.log('this state', this.state);
        console.groupEnd();
        if (nextState.count >= 4) {
            return false;
        }
        return true;
        // kegunaan component ini, bisa diterapkan pada pembelian jumlah item yang dibeli, jika melebihi stock bisa di hentikan untuk penambahan 
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    //komponen componentWillUnmount dipanggil jika ada komponen kita yang hilang dari page kita
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1 //nilai count sebelumnya + 1
        })
    }

    render() {     // render adlh bagian yang wajib di tambahkan ketika membuat class dalam LifeCycle Component
        console.log('render');
        return (
            <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
        )
    }
}

export default LifeCycleComp;