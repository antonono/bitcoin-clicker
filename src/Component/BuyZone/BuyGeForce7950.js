import React, { Component } from 'react';
import '../../css/Shop.css';

class BuyGeForce7950 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_geforce7950: props.state.amount_geforce7950,
			amount_btc : props.state.amount_btc
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_geforce7950: props.state.amount_geforce7950,
			amount_btc : props.state.amount_btc
		};
	}
   

    render() {
        return (
            <div className='BuyZone'>
				<p>GeForce7950 Price : 85€</p>
				<button onClick={this.props.state.BuyGeForce7950}>Buy</button>
			</div>
        );
    }
}

export default BuyGeForce7950;