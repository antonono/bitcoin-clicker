import React, { Component } from 'react';
import '../../css/Shop.css';

class BuyGeForce4 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_geforce4: props.state.amount_geforce4,
			amount_btc : props.state.amount_btc
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_geforce4: props.state.amount_geforce4,
			amount_btc : props.state.amount_btc
		};
	}
   

    render() {
        return (
            <div className='BuyZone'>
				<p>GeForce4 Price : 55€</p>
				<button onClick={this.props.state.BuyGeForce4}>Buy</button>
			</div>
        );
    }
}

export default BuyGeForce4;