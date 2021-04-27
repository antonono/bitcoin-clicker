import React, { Component } from 'react';
import '../../css/Shop.css';

class BuyGeForceRTX3090 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_geforcertx3090: props.state.amount_geforcertx3090,
			amount_btc : props.state.amount_btc
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_geforcertx3090: props.state.amount_geforcertx3090,
			amount_btc : props.state.amount_btc
		};
	}
   

    render() {
        return (
            <div className='BuyZone'>
				<p>GeForceRTX3090 Price : 1500€</p>
				<button onClick={this.props.state.BuyGeForceRTX3090}>Buy</button>
			</div>
        );
    }
}

export default BuyGeForceRTX3090;