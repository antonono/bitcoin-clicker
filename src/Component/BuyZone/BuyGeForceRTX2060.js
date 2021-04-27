import React, { Component } from 'react';
import '../../css/Shop.css';

class BuyGeForceRTX2060 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_geforcertx2060: props.state.amount_geforcertx2060,
			amount_btc : props.state.amount_btc
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_geforcertx2060: props.state.amount_geforcertx2060,
			amount_btc : props.state.amount_btc
		};
	}
   

    render() {
        return (
            <div className='BuyZone'>
				<p>GeForceRTX2060 Price : 300€</p>
				<button onClick={this.props.state.BuyGeForceRTX2060}>Buy</button>
			</div>
        );
    }
}

export default BuyGeForceRTX2060;