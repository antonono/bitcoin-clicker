import React, { Component } from 'react';
import '../../css/CryptoWallet.css';

class CryptoWallet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_btc: props.state.amount_btc,
			amount_eth: props.state.amount_eth,
			amount_bnb: props.state.amount_bnb,
			amount_xrp: props.state.amount_xrp,
			amount_ada: props.state.amount_ada,
			amount_doge: props.state.amount_doge
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_btc: props.state.amount_btc,
			amount_eth: props.state.amount_eth,
			amount_bnb: props.state.amount_bnb,
			amount_xrp: props.state.amount_xrp,
			amount_ada: props.state.amount_ada,
			amount_doge: props.state.amount_doge
		};
	}

    render() {
        return (
            <div className='CryptoWallet'>
                <h1>Crypto Wallet</h1>
				<p>{this.state.amount_btc} BTC</p>
				<p>{this.state.amount_eth} ETH</p>
				<p>{this.state.amount_bnb} BNB</p>
				<p>{this.state.amount_ada} ADA</p>
				<p>{this.state.amount_doge} DOGE</p>
				<p>{this.state.amount_xrp} XRP</p>
            </div>
        );
    }
}

export default CryptoWallet;