import React, { Component } from 'react';
import '../../css/Shop.css';

class BuyGeForcePCX5950 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_geforcepcx5950: props.state.amount_geforcepcx5950,
			amount_btc : props.state.amount_btc
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_geforcepcx5950: props.state.amount_geforcepcx5950,
			amount_btc : props.state.amount_btc
		};
	}
   

    render() {
        return (
            <div className='BuyZone'>
				<p>GeForcePCX5950 Price : 65€</p>
				<button onClick={this.props.state.BuyGeForcePCX5950}>Buy</button>
			</div>
        );
    }
}

export default BuyGeForcePCX5950;