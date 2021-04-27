import React, { Component } from 'react';
import '../../css/Shop.css';

class BuyGeForce8800 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_geforce8800: props.state.amount_geforce8800,
			amount_btc : props.state.amount_btc
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_geforce8800: props.state.amount_geforce8800,
			amount_btc : props.state.amount_btc
		};
	}
   

    render() {
        return (
            <div className='BuyZone'>
				<p>GeForce8800 Price : 100€</p>
				<button onClick={this.props.state.BuyGeForce8800}>Buy</button>
			</div>
        );
    }
}

export default BuyGeForce8800;