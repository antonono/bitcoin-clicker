import React, { Component } from 'react';
import logo from './logo.svg';
import ClickBoard from './Component/ClickBoard/ClickBoard';
import Column1 from './Component/Column1/Column1';
import Column2 from './Component/Column2/Column2';
import Column3 from './Component/Column3/Column3';
import Header from './Component/Header/Header';
import './App.css';
import axios from 'axios';

class App extends React.Component {
	constructor(){
    super();
	
	this.state = {
		clickETH:this.clickHandlerrETH,
		clickADA:this.clickHandlerrADA,
		clickBNB:this.clickHandlerrBNB,
		clickDOGE:this.clickHandlerrDOGE,
		clickXRP:this.clickHandlerrXRP,
		tradebnb:this.tradeBNB,
		tradeada:this.tradeADA,
		tradedoge:this.tradeDOGE,
		tradeeth:this.tradeETH,
		tradexrp:this.tradeXRP,
		nametrade11: "BTC",
		nametrade12 : "ETH",
		nametrade21: "BTC",
		nametrade22 : "BNB",
		nametrade31: "BTC",
		nametrade32 : "ADA",
		nametrade41: "BTC",
		nametrade42 : "DOGE",
		nametrade51 : "BTC",
		nametrade52 : "XRP",
		BuyOldMobile : this.buyoldMobile,
		BuyOldPc : this.buyoldPc,
		BuyGeForce256 : this.buygeforce256,
		BuyGeForce4 : this.buygeforce4,
		BuyGeForcePCX5950 : this.buygeforcePCX5950,
		BuyGeForce6800 : this.buygeforce6800,
		BuyGeForce7950 : this.buygeforce7950,
		BuyGeForce8800 : this.buygeforce8800,
		BuyGeForce9800 : this.buygeforce9800,
		BuyGeForceGTX690 : this.buygeforcegtx690,
		BuyGeForceGTXTitan : this.buygeforcegtxtitan,
		BuyGeForce1080TI : this.buygeforce1080ti,
		BuyGeForceRTX2060 : this.buygeforcertx2060,
		BuyGeForceRTX2070 : this.buygeforcertx2070,
		BuyGeForceRTX2080: this.buygeforcertx2080,
		BuyGeForceRTX3060 : this.buygeforcertx3060,
		BuyGeForceRTX3070 : this.buygeforcertx3070,
		BuyGeForceRTX3080 : this.buygeforcertx3080,
		BuyGeForceRTX3090 : this.buygeforcertx3090,
		amount_stsh_each_second:0.00000000,
		amount_btc : 1,
		amount_eth : 0,
		amount_bnb : 0,
		amount_xrp : 0,
		amount_ada : 0,
		amount_doge : 0,
		btceur : 0,
		etheur : 0,
		adaeur : 0,
		dogeeur : 0,
		xrpeur : 0,
		bnbeur : 0,
		amount_oldmobile:0,
		amount_oldpc:0,
		amount_geforce256:0,
		amount_geforce4:0,
		amount_geforcePCX5950:0,
		amount_geforce6800:0,
		amount_geforce7950:0,
		amount_geforce8800:0,
		amount_geforce9800:0,
		amount_geforcegtx690:0,
		amount_geforcegtxtitan:0,
		amount_geforce1080:0,
		amount_geforceRTX2060:0,
		amount_geforceRTX2070:0,
		amount_geforceRTX2080:0,
		amount_geforceRTX2090:0,
		amount_geforceRTX3060:0,
		amount_geforceRTX3070:0,
		amount_geforceRTX3080:0,
		amount_geforceRTX3090:0
		};
	}
	tradeXRP = (number) => {
		if(this.state.nametrade51==="BTC"){
			if(number<= this.state.amount_btc){
				this.setState({
					amount_btc:this.state.amount_btc-number,
					amount_xrp:this.state.amount_xrp + (number*this.state.btceur)/this.state.xrpeur
				});
			}
		}
		else{
			if(number<= this.state.amount_xrp){
				this.setState({
				amount_xrp:this.state.amount_xrp-number,
				amount_btc:this.state.amount_btc + (number*this.state.xrpeur)/this.state.btceur
				});
			}
		}
	}
	
	
	tradeETH = (number) => {
		if(this.state.nametrade11==="BTC"){
			if(number<= this.state.amount_btc){
				this.setState({
					amount_btc:this.state.amount_btc-number,
					amount_eth:this.state.amount_eth + (number*this.state.btceur)/this.state.etheur
				});
			}
		}
		else{
			if(number<= this.state.amount_eth){
				this.setState({
				amount_eth:this.state.amount_eth-number,
				amount_btc:this.state.amount_btc + (number*this.state.etheur)/this.state.btceur
				});
			}
		}
	}
	
	
	tradeBNB = (number) => {
		if(this.state.nametrade21==="BTC"){
			if(number<= this.state.amount_btc){
				this.setState({
					amount_btc:this.state.amount_btc-number,
					amount_bnb:this.state.amount_bnb + (number*this.state.btceur)/this.state.bnbeur
				});
			}
		}
		else{
			if(number<= this.state.amount_bnb){
				this.setState({
				amount_bnb:this.state.amount_bnb-number,
				amount_btc:this.state.amount_btc + (number*this.state.bnbeur)/this.state.btceur
				});
			}
		}
	}
	
	tradeADA = (number) => {
		if(this.state.nametrade31==="BTC"){
			if(number<= this.state.amount_btc){
				this.setState({
					amount_btc:this.state.amount_btc-number,
					amount_ada:this.state.amount_ada + (number*this.state.btceur)/this.state.adaeur
				});
			}
		}
		else{
			if(number<= this.state.amount_ada){
				this.setState({
				amount_ada:this.state.amount_ada-number,
				amount_btc:this.state.amount_btc + (number*this.state.adaeur)/this.state.btceur
				});
			}
		}
	}
	
	tradeDOGE = (number) => {
		if(this.state.nametrade41==="BTC"){
			if(number<= this.state.amount_btc){
				this.setState({
					amount_btc:this.state.amount_btc-number,
					amount_doge:this.state.amount_doge + (number*this.state.btceur)/this.state.dogeeur
				});
			}
		}
		else{
			if(number<= this.state.amount_doge){
				this.setState({
				amount_doge:this.state.amount_doge-number,
				amount_btc:this.state.amount_btc + (number*this.state.dogeeur)/this.state.btceur
				});
			}
		}
	}
	clickHandlerrXRP = () => {
        if(this.state.nametrade51==="BTC"){
			this.setState({
			nametrade51: "XRP",
			nametrade52 : "BTC"
			});
		}
		else{
			this.setState({
			nametrade51: "BTC",
			nametrade52 : "XRP"
			});
		}
    }
	
	clickHandlerrADA = () => {
        if(this.state.nametrade31==="BTC"){
			this.setState({
			nametrade31: "ADA",
			nametrade32 : "BTC"
			});
		}
		else{
			this.setState({
			nametrade31: "BTC",
			nametrade32 : "ADA"
			});
		}
    }
	
	clickHandlerrBNB = () => {
        if(this.state.nametrade21==="BTC"){
			this.setState({
			nametrade21: "BNB",
			nametrade22 : "BTC"
			});
		}
		else{
			this.setState({
			nametrade21: "BTC",
			nametrade22 : "BNB"
			});
		}
    }
	
	clickHandlerrDOGE = () => {
        if(this.state.nametrade41==="BTC"){
			this.setState({
			nametrade41: "DOGE",
			nametrade42 : "BTC"
			});
		}
		else{
			this.setState({
			nametrade41: "BTC",
			nametrade42 : "DOGE"
			});
		}
    }
	
	clickHandlerrETH = () => {
        if(this.state.nametrade11==="BTC"){
			this.setState({
			nametrade11: "ETH",
			nametrade12 : "BTC"
			});
		}
		else{
			this.setState({
			nametrade11: "BTC",
			nametrade12 : "ETH"
			});
		}
    }
	
	cookieClick = (number = this.state.cookie_click_value, player_click = true) => {
		this.setState({
			amount_btc : Number((this.state.amount_btc + 0.00000100).toFixed(6))
			});
	}
	
	buyoldMobile = () => {
		if(this.state.amount_btc * this.state.btceur  >= 10){
			this.setState({
				amount_btc : Number((this.state.amount_btc - (10 / this.state.btceur)).toFixed(6)),
				amount_oldmobile : this.state.amount_oldmobile + 1,
				amount_stsh_each_second : this.state.amount_stsh_each_second + 0.00000100
			});
		}
	}
	
	buyoldPc = () => {
		if(this.state.amount_btc * this.state.btceur  >= 30){
			this.setState({
				amount_btc : Number((this.state.amount_btc - (30 / this.state.btceur)).toFixed(6)),
				amount_oldpc : this.state.amount_oldpc + 1,
				amount_stsh_each_second : this.state.amount_stsh_each_second + 0.00000200
			});
		}
	}
	
	buygeforce256 = () => {
		if(this.state.amount_btc * this.state.btceur  >= 45){
			this.setState({
				amount_btc : Number((this.state.amount_btc - (45 / this.state.btceur)).toFixed(6)),
				amount_geforce256 : this.state.amount_geforce256 + 1,
				amount_stsh_each_second : this.state.amount_stsh_each_second + 0.00000300
			});
		}
	}
	
	buygeforce4 = () => {
		if(this.state.amount_btc * this.state.btceur  >= 55){
			this.setState({
				amount_btc : Number((this.state.amount_btc - (55 / this.state.btceur)).toFixed(6)),
				amount_geforce4 : this.state.amount_geforce4 + 1,
				amount_stsh_each_second : this.state.amount_stsh_each_second + 0.00000400
			});
		}
	}
	
	buygeforcePCX5950 = () => {
		if(this.state.amount_btc * this.state.btceur  >= 65){
			this.setState({
				amount_btc : Number((this.state.amount_btc - (45 / this.state.btceur)).toFixed(6)),
				amount_geforcePCX5950 : this.state.amount_geforcePCX5950 + 1,
				amount_stsh_each_second : this.state.amount_stsh_each_second + 0.00000500
			});
		}
	}
	
	buygeforce6800 = () => {
		if(this.state.amount_btc * this.state.btceur  >= 75){
			this.setState({
				amount_btc : Number((this.state.amount_btc - (45 / this.state.btceur)).toFixed(6)),
				amount_geforce6800 : this.state.amount_geforce6800 + 1,
				amount_stsh_each_second : this.state.amount_stsh_each_second + 0.00000600
			});
		}
	}
	
	buygeforce7950 = () => {
		if(this.state.amount_btc * this.state.btceur  >= 85){
			this.setState({
				amount_btc : Number((this.state.amount_btc - (85 / this.state.btceur)).toFixed(6)),
				amount_geforce7950 : this.state.amount_geforce7950 + 1,
				amount_stsh_each_second : this.state.amount_stsh_each_second + 0.00000700
			});
		}
	}
	
	buygeforce8800 = () => {
		if(this.state.amount_btc * this.state.btceur  >= 100){
			this.setState({
				amount_btc : Number((this.state.amount_btc - (100 / this.state.btceur)).toFixed(6)),
				amount_geforce8800 : this.state.amount_geforce8800 + 1,
				amount_stsh_each_second : this.state.amount_stsh_each_second + 0.00001000
			});
		}
	}
	
	buygeforce9800 = () => {
		if(this.state.amount_btc * this.state.btceur  >= 120){
			this.setState({
				amount_btc : Number((this.state.amount_btc - (120 / this.state.btceur)).toFixed(6)),
				amount_geforce9800 : this.state.amount_geforce9800 + 1,
				amount_stsh_each_second : this.state.amount_stsh_each_second + 0.00001300
			});
		}
	}
	
	buygeforcegtx690 = () => {
		if(this.state.amount_btc * this.state.btceur  >= 140){
			this.setState({
				amount_btc : Number((this.state.amount_btc - (140 / this.state.btceur)).toFixed(6)),
				amount_geforcegtx690 : this.state.amount_geforcegtx690 + 1,
				amount_stsh_each_second : this.state.amount_stsh_each_second + 0.00001600
			});
		}
	}
	
	buygeforcegtxtitan = () => {
		if(this.state.amount_btc * this.state.btceur  >= 160){
			this.setState({
				amount_btc : Number((this.state.amount_btc - (160 / this.state.btceur)).toFixed(6)),
				amount_geforcegtxtitan : this.state.amount_geforcegtxtitan + 1,
				amount_stsh_each_second : this.state.amount_stsh_each_second + 0.00002000
			});
		}
	}
	
	buygeforce1080ti = () => {
		if(this.state.amount_btc * this.state.btceur  >= 180){
			this.setState({
				amount_btc : Number((this.state.amount_btc - (180 / this.state.btceur)).toFixed(6)),
				amount_geforce1080 : this.state.amount_geforce1080 + 1,
				amount_stsh_each_second : this.state.amount_stsh_each_second + 0.00002500
			});
		}
	}
	
	buygeforcertx2060 = () => {
		if(this.state.amount_btc * this.state.btceur  >= 300){
			this.setState({
				amount_btc : Number((this.state.amount_btc - (300 / this.state.btceur)).toFixed(6)),
				amount_geforceRTX2060 : this.state.amount_geforceRTX2060 + 1,
				amount_stsh_each_second : this.state.amount_stsh_each_second + 0.00005000
			});
		}
	}
	
	buygeforcertx2070 = () => {
		if(this.state.amount_btc * this.state.btceur  >= 450){
			this.setState({
				amount_btc : Number((this.state.amount_btc - (450 / this.state.btceur)).toFixed(6)),
				amount_geforceRTX2070 : this.state.amount_geforceRTX2070 + 1,
				amount_stsh_each_second : this.state.amount_stsh_each_second + 0.00010000
			});
		}
	}
	
	buygeforcertx2080 = () => {
		if(this.state.amount_btc * this.state.btceur  >= 550){
			this.setState({
				amount_btc : Number((this.state.amount_btc - (550 / this.state.btceur)).toFixed(6)),
				amount_geforceRTX2080 : this.state.amount_geforceRTX2080 + 1,
				amount_stsh_each_second : this.state.amount_stsh_each_second + 0.00015000
			});
		}
	}
	
	buygeforcertx3060 = () => {
		if(this.state.amount_btc * this.state.btceur  >= 650){
			this.setState({
				amount_btc : Number((this.state.amount_btc - (650 / this.state.btceur)).toFixed(6)),
				amount_geforceRTX3060 : this.state.amount_geforceRTX3060 + 1,
				amount_stsh_each_second : this.state.amount_stsh_each_second + 0.00020000
			});
		}
	}
	
	buygeforcertx3070 = () => {
		if(this.state.amount_btc * this.state.btceur  >= 850){
			this.setState({
				amount_btc : Number((this.state.amount_btc - (850 / this.state.btceur)).toFixed(6)),
				amount_geforceRTX3070 : this.state.amount_geforceRTX3070 + 1,
				amount_stsh_each_second : this.state.amount_stsh_each_second + 0.00030000
			});
		}
	}
	
	buygeforcertx3080 = () => {
		if(this.state.amount_btc * this.state.btceur  >= 1100){
			this.setState({
				amount_btc : Number((this.state.amount_btc - (1100 / this.state.btceur)).toFixed(6)),
				amount_geforceRTX3080 : this.state.amount_geforceRTX3080 + 1,
				amount_stsh_each_second : this.state.amount_stsh_each_second + 0.00050000
			});
		}
	}
	
	buygeforcertx3090 = () => {
		if(this.state.amount_btc * this.state.btceur  >= 1500){
			this.setState({
				amount_btc : Number((this.state.amount_btc - (1500 / this.state.btceur)).toFixed(6)),
				amount_geforceRTX3090 : this.state.amount_geforceRTX3090 + 1,
				amount_stsh_each_second : this.state.amount_stsh_each_second + 0.00080000
			});
		}
	}
	
	componentDidMount() {
		this.intervalID = setInterval(
		() => this.tick(),
		1000
		);
		
		
		
	}
	componentWillUnmount() {
		clearInterval(this.intervalID);
	}
	tick() {
		axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DOGE,ADA,XRP,BNB&tsyms=EUR')
			.then(res => {
				const cryptos = res.data;
				this.setState({
				btceur : cryptos.BTC.EUR,
				adaeur : cryptos.ADA.EUR,
				dogeeur : cryptos.DOGE.EUR,
				xrpeur : cryptos.XRP.EUR,
				bnbeur : cryptos.BNB.EUR,
				etheur : cryptos.ETH.EUR
				});
			})
		this.setState({
		amount_btc : Number((this.state.amount_btc + this.state.amount_stsh_each_second).toFixed(6))
		});
	}
	
	tickcrypto() {
		axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DOGE,ADA,XRP&tsyms=EUR')
			.then(res => {
				const cryptos = res.data;
				console.log(cryptos);
			})
	}
	
	
	
	
	render(){
		return (
			<div className="App">
				<Header/>
				<div className="Content">
					<Column1 state={this.state} OnClick = {this.cookieClick} />
					<Column2 state={this.state}/>
					<Column3 state={this.state}/> 
				</div>
			</div>
		);
	}
}

export default App;
