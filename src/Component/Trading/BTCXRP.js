import React, { Component } from 'react';
import '../../css/Trading.css';

class BTCXRP extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nametrade51: "BTC",
			nametrade52 : "XRP",
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
		this.setState({input: event.target.value,value : Number((event.target.value * this.props.state.btceur / this.props.state.xrpeur).toFixed(6))});
	}
	else {
		this.setState({input: event.target.value,value : Number((event.target.value * this.props.state.xrpeur / this.props.state.btceur).toFixed(6))});
	}
	}
	
    render() {
        return (
            <div className='ToTrade'>
			<input type="text" pattern="[0-9]*,[0-9]*"
				value={this.state.input} onInput={this.handleChange.bind(this)}/>
				<p>{this.props.state.nametrade51}</p>
				<div className='clickBoardTwoWay' onClick={this.props.state.clickXRP}></div>
				<p>{this.state.value} {this.props.state.nametrade52}</p>
				<button onClick={() =>this.props.state.tradexrp(this.state.input)}>Trade</button>
			</div>
        );
    }
}

export default BTCXRP;