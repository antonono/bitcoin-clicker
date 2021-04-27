import React, { Component } from 'react';
import '../../css/Shop.css';

class BuyGeForceRTX3060 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_geforcertx3060: props.state.amount_geforcertx3060,
			amount_btc : props.state.amount_btc
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_geforcertx3060: props.state.amount_geforcertx3060,
			amount_btc : props.state.amount_btc
		};
	}
   

    render() {
        return (
            <div className='BuyZone'>
				<p>GeForceRTX3060 Price : 650€</p>
				<button onClick={this.props.state.BuyGeForceRTX3060}>Buy</button>
			</div>
        );
    }
}

export default BuyGeForceRTX3060;