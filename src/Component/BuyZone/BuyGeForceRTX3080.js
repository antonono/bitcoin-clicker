import React, { Component } from 'react';
import '../../css/Shop.css';

class BuyGeForceRTX3080 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_geforcertx3080: props.state.amount_geforcertx3080,
			amount_btc : props.state.amount_btc
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_geforcertx3080: props.state.amount_geforcertx3080,
			amount_btc : props.state.amount_btc
		};
	}
   

    render() {
        return (
            <div className='BuyZone'>
				<p>GeForceRTX3080 Price : 1100€</p>
				<button onClick={this.props.state.BuyGeForceRTX3080}>Buy</button>
			</div>
        );
    }
}

export default BuyGeForceRTX3080;