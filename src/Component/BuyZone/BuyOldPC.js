import React, { Component } from 'react';
import '../../css/Shop.css';

class BuyOldPC extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_oldpc: props.state.amount_oldpc,
			amount_btc : props.state.amount_btc
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_oldpc: props.state.amount_oldpc,
			amount_btc : props.state.amount_btc
		};
	}
   

    render() {
        return (
            <div className='BuyZone'>
				<p>Old PC Price : 30€</p>
				<button onClick={this.props.state.BuyOldPc}>Buy</button>
			</div>
        );
    }
}

export default BuyOldPC;