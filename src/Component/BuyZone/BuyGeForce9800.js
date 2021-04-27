import React, { Component } from 'react';
import '../../css/Shop.css';

class BuyGeForce9800 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_geforce9800: props.state.amount_geforce9800,
			amount_btc : props.state.amount_btc
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_geforce9800: props.state.amount_geforce9800,
			amount_btc : props.state.amount_btc
		};
	}
   

    render() {
        return (
            <div className='BuyZone'>
				<p>GeForce9800 Price : 120€</p>
				<button onClick={this.props.state.BuyGeForce9800}>Buy</button>
			</div>
        );
    }
}

export default BuyGeForce9800;