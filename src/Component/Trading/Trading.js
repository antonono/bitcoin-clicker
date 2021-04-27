import React, { Component } from 'react';
import '../../css/Trading.css';
import BTCETH from '../../Component/Trading/BTCETH';
import BTCBNB from '../../Component/Trading/BTCBNB';
import BTCADA from '../../Component/Trading/BTCADA';
import BTCDOGE from '../../Component/Trading/BTCDOGE';
import BTCXRP from '../../Component/Trading/BTCXRP';

class Trading extends Component {
	constructor(props) {
			super(props);
		}
   

    render() {
        return (
            <div className='Trading'>
               <h1>Trade BTC and make profit for the alt season</h1>
			   <BTCETH state={this.props.state}/>
			   <span/>
			   <BTCBNB state={this.props.state}/>
			   <span/>
			   <BTCADA state={this.props.state}/>
			   <span/>
			   <BTCDOGE state={this.props.state}/>
			   <span/>
			   <BTCXRP state={this.props.state}/>
            </div>
        );
    }
}

export default Trading;