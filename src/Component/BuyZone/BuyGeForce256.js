import React, { Component } from 'react';
import '../../css/Shop.css';

class BuyGeForce256 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_geforce256: props.state.amount_geforce256,
			amount_btc : props.state.amount_btc
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_geforce256: props.state.amount_geforce256,
			amount_btc : props.state.amount_btc
		};
	}
   

    render() {
        return (
            <div className='BuyZone'>
				<p>GeForce256 : 45€</p>
				<button onClick={this.props.state.BuyGeForce256}>Buy</button>
			</div>
        );
    }
}

export default BuyGeForce256;