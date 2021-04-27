import React, { Component } from 'react';
import '../../css/Shop.css';

class BuyOldPhone extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_oldmobile: props.state.amount_oldmobile,
			amount_btc : props.state.amount_btc
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_oldmobile: props.state.amount_oldmobile,
			amount_btc : props.state.amount_btc
		};
	}
   

    render() {
        return (
            <div className='BuyZone'>
				<p>Old Phone Price : 10€</p>
				<button onClick = {this.props.state.BuyOldMobile}>Buy</button>
			</div>
        );
    }
}

export default BuyOldPhone;