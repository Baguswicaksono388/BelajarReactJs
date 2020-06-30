import React, { Component, Fragment } from 'react';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {
    state = {
        order: 4,
        name: 'Bagus'
    }

    // ini adlh fungsi untuk mengupdate state pada keranjang
    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        });
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/img/content/img_logo_etanee_white.svg" alt=""></img>
                    </div>
                    <div className="troley">
                        <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt=""></img>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} /> {/* ini adalah child component. Dan onCounterChange adlh sebuah props, dan penamaanya bebas */}
            </Fragment>
        );
    }
}

export default Product;