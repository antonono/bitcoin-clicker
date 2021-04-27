import React, { Component } from 'react';
import '../../css/Shop.css';
import BuyOldPhone from '../../Component/BuyZone/BuyOldPhone';
import BuyOldPC from '../../Component/BuyZone/BuyOldPC';
import BuyGeForce256 from '../../Component/BuyZone/BuyGeForce256';
import BuyGeForce4 from '../../Component/BuyZone/BuyGeForce4';
import BuyGeForcePCX5950 from '../../Component/BuyZone/BuyGeForcePCX5950';
import BuyGeForce6800 from '../../Component/BuyZone/BuyGeForce6800';
import BuyGeForce7950 from '../../Component/BuyZone/BuyGeForce7950';
import BuyGeForce8800 from '../../Component/BuyZone/BuyGeForce8800';
import BuyGeForce9800 from '../../Component/BuyZone/BuyGeForce9800';
import BuyGeForceGTX690 from '../../Component/BuyZone/BuyGeForceGTX690';
import BuyGeForceGTXTitan from '../../Component/BuyZone/BuyGeForceGTXTitan';
import BuyGeForce1080Ti from '../../Component/BuyZone/BuyGeForce1080Ti';
import BuyGeForceRTX2060 from '../../Component/BuyZone/BuyGeForceRTX2060';
import BuyGeForceRTX2070 from '../../Component/BuyZone/BuyGeForceRTX2070';
import BuyGeForceRTX2080 from '../../Component/BuyZone/BuyGeForceRTX2080';
import BuyGeForceRTX3060 from '../../Component/BuyZone/BuyGeForceRTX3060';
import BuyGeForceRTX3070 from '../../Component/BuyZone/BuyGeForceRTX3070';
import BuyGeForceRTX3080 from '../../Component/BuyZone/BuyGeForceRTX3080';
import BuyGeForceRTX3090 from '../../Component/BuyZone/BuyGeForceRTX3090';

class Shop extends Component {
	constructor(props) {
			super(props);
		}
   

    render() {
        return (
            <div className='Shop'>
               <h1>Buy Zone</h1>
			   <p>You can only trade with you BTC</p>
			   <BuyOldPhone state={this.props.state}/>
			   <BuyOldPC state={this.props.state}/>
			   <BuyGeForce256 state={this.props.state}/>
			   <BuyGeForce4 state={this.props.state}/>
			   <BuyGeForcePCX5950 state={this.props.state}/>
			   <BuyGeForce6800 state={this.props.state}/>
			   <BuyGeForce7950 state={this.props.state}/>
			   <BuyGeForce8800 state={this.props.state}/>
			   <BuyGeForce9800 state={this.props.state}/>
			   <BuyGeForceGTX690 state={this.props.state}/>
			   <BuyGeForceGTXTitan state={this.props.state}/>
			   <BuyGeForce1080Ti state={this.props.state}/>
			   <BuyGeForceRTX2060 state={this.props.state}/>
			   <BuyGeForceRTX2070 state={this.props.state}/>
			   <BuyGeForceRTX2080 state={this.props.state}/>
			   <BuyGeForceRTX3060 state={this.props.state}/>
			   <BuyGeForceRTX3070 state={this.props.state}/>
			   <BuyGeForceRTX3080 state={this.props.state}/>
			   <BuyGeForceRTX3090 state={this.props.state}/>
            </div>
        );
    }
}

export default Shop;