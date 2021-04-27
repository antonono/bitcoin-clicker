import React, { Component } from 'react';
import '../../css/Shop.css';

class BuyGeForceRTX3070 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_geforcertx3070: props.state.amount_geforcertx3070,
			amount_btc : props.state.amount_btc
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_geforcertx3070: props.state.amount_geforcertx3070,
			amount_btc : props.state.amount_btc
		};
	}
   

    render() {
        return (
            <div className='BuyZone'>
				<p>GeForceRTX3070 Price : 850€</p>
				<button onClick={this.props.state.BuyGeForceRTX3070}>Buy</button>
			</div>
        );
    }
}

export default BuyGeForceRTX3070;