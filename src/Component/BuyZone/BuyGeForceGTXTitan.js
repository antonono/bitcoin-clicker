import React, { Component } from 'react';
import '../../css/Shop.css';

class BuyGeForceGTXTitan extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_geforcegtxtitant: props.state.amount_geforcegtxtitant,
			amount_btc : props.state.amount_btc
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_geforcegtxtitant: props.state.amount_geforcegtxtitant,
			amount_btc : props.state.amount_btc
		};
	}
   

    render() {
        return (
            <div className='BuyZone'>
				<p>GeForceGTX Titan Price : 160€</p>
				<button onClick={this.props.state.BuyGeForceGTXTitan}>Buy</button>
			</div>
        );
    }
}

export default BuyGeForceGTXTitan;