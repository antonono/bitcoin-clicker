import React, { Component } from 'react';
import '../../css/Shop.css';

class BuyGeForceGTX690 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_geforcegtx690: props.state.amount_geforcegtx690,
			amount_btc : props.state.amount_btc
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_geforcegtx690: props.state.amount_geforcegtx690,
			amount_btc : props.state.amount_btc
		};
	}
   

    render() {
        return (
            <div className='BuyZone'>
				<p>GeForceGTX690 Price : 140€</p>
				<button onClick={this.props.state.BuyGeForceGTX690}>Buy</button>
			</div>
        );
    }
}

export default BuyGeForceGTX690;