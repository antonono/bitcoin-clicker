import React, { Component } from 'react';
import '../../css/TotalWallet.css';

class TotalWallet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_btc: props.amount_btc,
			btceur:props.btceur
		}
		console.log(props);
	}
   
   static getDerivedStateFromProps(props, state) {
    return {
		amount_btc: props.amount_btc,
		btceur:props.btceur
	};
  }

    render() {
		const amount_eur_btc = this.props.amount_btc * this.props.btceur;
		const amount_eur = this.props.amount_btc * this.props.btceur + this.props.state.amount_ada * this.props.state.adaeur + this.props.state.amount_eth * this.props.state.etheur + this.props.state.amount_xrp * this.props.state.xrpeur + this.props.state.amount_doge * this.props.state.dogeeur + this.props.state.amount_bnb * this.props.state.bnbeur;
        return (
            <div className='TotalWallet'>
               <h1>TotalWallet</h1>
			   <p>You have {Number((amount_eur_btc).toFixed(2))}€ en Bitcoin</p>
			   <p>You have {Number((amount_eur).toFixed(2))}€</p>
            </div>
        );
    }
}

export default TotalWallet;