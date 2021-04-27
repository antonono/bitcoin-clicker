import React, { Component } from 'react';
import '../../css/Shop.css';

class BuyGeForce1080Ti extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_geforce1080ti: props.state.amount_geforce1080ti,
			amount_btc : props.state.amount_btc
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_geforce1080ti: props.state.amount_geforce1080ti,
			amount_btc : props.state.amount_btc
		};
	}
   

    render() {
        return (
            <div className='BuyZone'>
				<p>GeForce 1080ti Price : 180€</p>
				<button onClick = {this.props.state.BuyGeForce1080TI}>Buy</button>
			</div>
        );
    }
}

export default BuyGeForce1080Ti;