import React, { Component } from 'react';
import '../../css/Shop.css';

class BuyGeForce6800 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_geforce6800: props.state.amount_geforce6800,
			amount_btc : props.state.amount_btc
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_geforce6800: props.state.amount_geforce6800,
			amount_btc : props.state.amount_btc
		};
	}
   

    render() {
        return (
            <div className='BuyZone'>
				<p>GeForce6800 Price : 75€</p>
				<button onClick={this.props.state.BuyGeForce6800}>Buy</button>
			</div>
        );
    }
}

export default BuyGeForce6800;