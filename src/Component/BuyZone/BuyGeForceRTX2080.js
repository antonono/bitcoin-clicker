import React, { Component } from 'react';
import '../../css/Shop.css';

class BuyGeForceRTX2080 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_geforcertx2080: props.state.amount_geforcertx2080,
			amount_btc : props.state.amount_btc
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_geforcertx2080: props.state.amount_geforcertx2080,
			amount_btc : props.state.amount_btc
		};
	}
   

    render() {
        return (
            <div className='BuyZone'>
				<p>GeForceRTX2080 Price : 550€</p>
				<button onClick={this.props.state.BuyGeForceRTX2080}>Buy</button>
			</div>
        );
    }
}

export default BuyGeForceRTX2080;