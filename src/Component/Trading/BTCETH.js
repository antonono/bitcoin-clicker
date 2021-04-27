import React, { Component } from 'react';
import '../../css/Trading.css';

class BTCETH extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nametrade11: "BTC",
			nametrade12 : "ETH",
			amount_btc : props.state.amount_btc,
			input : 0,
			value : 0
		}
		
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_btc : props.state.amount_btc
		};
	}
	
   
	handleChange(event) { 
	if(this.props.state.nametrade11==="BTC"){
		this.setState({input: event.target.value,value : Number((event.target.value * this.props.state.btceur / this.props.state.etheur).toFixed(6))});
	}
	else {
		this.setState({input: event.target.value,value : Number((event.target.value * this.props.state.etheur / this.props.state.btceur).toFixed(6))});
	}
	}
	
    render() {
        return (
            <div className='ToTrade'>
			<input type="text" pattern="[0-9]*,[0-9]*"
				value={this.state.input} onInput={this.handleChange.bind(this)}/>
				<p>{this.props.state.nametrade11}</p>
				<div className='clickBoardTwoWay' onClick={this.props.state.clickETH}></div>
				<p>{this.state.value} {this.props.state.nametrade12}</p>
				<button onClick={() =>this.props.state.tradeeth(this.state.input)}>Trade</button>
			</div>
        );
    }
}

export default BTCETH;