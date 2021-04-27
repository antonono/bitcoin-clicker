import React, { Component } from 'react';
import '../../css/Column1.css';
import  ClickBoard from '../ClickBoard/ClickBoard';
import  TotalWallet from '../TotalWallet/TotalWallet';
import  CryptoWallet from '../CryptoWallet/CryptoWallet';

class Column1 extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			amount_btc : Number((props.state.amount_btc),7),
			OnClick : props.OnClick,
			btceur : props.state.btceur,
			amoun_sth : props.state.amount_stsh_each_second
			}
	}
	
	static getDerivedStateFromProps(props, state) {
    return {amount_btc: props.state.amount_btc,amoun_sth : Number((props.state.amount_stsh_each_second).toFixed(6)) };
  }
	
	
    render() {
        return (
            <div className='Column1'>
                <ClickBoard  onClick = {this.state.OnClick} amount_btc= {this.state.amount_btc} amount_sth = {this.state.amoun_sth}/>
				<TotalWallet  state = {this.props.state} btceur = {this.props.state.btceur} amount_btc= {this.state.amount_btc}/>
				<CryptoWallet state = {this.props.state}/>
            </div>
        );
    }
}

export default Column1;