import React, { Component } from 'react';
import '../../css/clickBoard.css';

class ClickBoard extends Component {
	constructor(props) {
		super(props);
	}
	
	
    clickHandler = () => {
        this.props.onClick();
    }

    render() {
        return (
            <div className='clickBoard'>
				<h1>Click To Earn 100 Satoshi</h1>
				<p>You earn every seconds {this.props.amount_sth} Satoshi</p>
				<p>You have {this.props.amount_btc} BTC</p>
                <div className='clickBoard__cookie' onClick={this.clickHandler}></div>
            </div>
        );
    }
}

export default ClickBoard;