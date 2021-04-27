import React, { Component } from 'react';
import '../../css/Shop.css';

class BuyGeForceRTX2070 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_geforcertx2070: props.state.amount_geforcertx2070,
			amount_btc : props.state.amount_btc
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_geforcertx2070: props.state.amount_geforcertx2070,
			amount_btc : props.state.amount_btc
		};
	}
   

    render() {
        return (
            <div className='BuyZone'>
				<p>GeForceRTX2070 Price : 450€</p>
				<button onClick={this.props.state.BuyGeForceRTX2070}>Buy</button>
			</div>
        );
    }
}

export default BuyGeForceRTX2070;