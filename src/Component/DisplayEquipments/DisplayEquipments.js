import React, { Component } from 'react';
import '../../css/DisplayEquipments.css';

class DisplayEquipments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount_oldmobile: props.state.amount_oldmobile,
			amount_oldpc: props.state.amount_oldpc,
			amount_geforce256: props.state.amount_geforce256,
			amount_geforce4: props.state.amount_geforce4,
			amount_geforcePCX5950: props.state.amount_geforcePCX5950,
			amount_geforce6800: props.state.amount_geforce6800,
			amount_geforce7950: props.state.amount_geforce7950,
			amount_geforce8800: props.state.amount_geforce8800,
			amount_geforce9800: props.state.amount_geforce9800,
			amount_geforcegtx690: props.state.amount_geforcegtx690,
			amount_geforcegtxtitan: props.state.amount_geforcegtxtitan,
			amount_geforce1080: props.state.amount_geforce1080,
			amount_geforceRTX2060: props.state.amount_geforceRTX2060,
			amount_geforceRTX2070: props.state.amount_geforceRTX2070,
			amount_geforceRTX2080: props.state.amount_geforceRTX2080,
			amount_geforceRTX2090: props.state.amount_geforceRTX2090,
			amount_geforceRTX3060: props.state.amount_geforceRTX3060,
			amount_geforceRTX3070: props.state.amount_geforceRTX3070,
			amount_geforceRTX3080: props.state.amount_geforceRTX3080,
			amount_geforceRTX3090: props.state.amount_geforceRTX3090
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			amount_oldmobile: props.state.amount_oldmobile,
			amount_oldpc: props.state.amount_oldpc,
			amount_geforce256: props.state.amount_geforce256,
			amount_geforce4: props.state.amount_geforce4,
			amount_geforcePCX5950: props.state.amount_geforcePCX5950,
			amount_geforce6800: props.state.amount_geforce6800,
			amount_geforce7950: props.state.amount_geforce7950,
			amount_geforce8800: props.state.amount_geforce8800,
			amount_geforce9800: props.state.amount_geforce9800,
			amount_geforcegtx690: props.state.amount_geforcegtx690,
			amount_geforcegtxtitan: props.state.amount_geforcegtxtitan,
			amount_geforce1080: props.state.amount_geforce1080,
			amount_geforceRTX2060: props.state.amount_geforceRTX2060,
			amount_geforceRTX2070: props.state.amount_geforceRTX2070,
			amount_geforceRTX2080: props.state.amount_geforceRTX2080,
			amount_geforceRTX2090: props.state.amount_geforceRTX2090,
			amount_geforceRTX3060: props.state.amount_geforceRTX3060,
			amount_geforceRTX3070: props.state.amount_geforceRTX3070,
			amount_geforceRTX3080: props.state.amount_geforceRTX3080,
			amount_geforceRTX3090: props.state.amount_geforceRTX3090
		};
	}
   

    render() {
        return (
            <div className='DisplayEquipments'>
               <h1>Number of Old Mobile : {this.state.amount_oldmobile}</h1>
               <h1>Number of Old PC : {this.state.amount_oldpc}</h1>
               <h1>Number of GeForce256 :  {this.state.amount_geforce256}</h1>
               <h1>Number of GeForce4 Ti4600 : {this.state.amount_geforce4}</h1>
               <h1>Number of GeForcePCX5950 : {this.state.amount_geforcePCX5950}</h1>
               <h1>Number of GeForce6800 : {this.state.amount_geforce6800} </h1>
			   <h1>Number of GeFroce7950 : {this.state.amount_geforce7950}</h1>
               <h1>Number of GeFroce8800 : {this.state.amount_geforce8800}</h1>
               <h1>Number of GeForce9800 :  {this.state.amount_geforce9800}</h1>
               <h1>Number of GeForceGTX690 : {this.state.amount_geforcegtx690}</h1>
               <h1>Number of GeForceGTXTitan : {this.state.amount_geforcegtxtitan}</h1>
               <h1>Number of GeFroce1080Ti : {this.state.amount_geforce1080}</h1>
			   <h1>Number of GeForceRTX2060 : {this.state.amount_geforceRTX2060}</h1>
               <h1>Number of GeForceRTX2070 : {this.state.amount_geforceRTX2070}</h1>
               <h1>Number of GeForceRTX2080Ti : {this.state.amount_geforceRTX2080}</h1>
               <h1>Number of GeForceRTX3060 : {this.state.amount_geforceRTX3060}</h1>
               <h1>Number of GeForceRTX3070 : {this.state.amount_geforceRTX3070}</h1>
               <h1>Number of GeForceRTX3080 : {this.state.amount_geforceRTX3080}</h1>
			   <h1>Number of GeForceRTX3090 : {this.state.amount_geforceRTX3090}</h1>
			   </div>
        );
    }
}

export default DisplayEquipments;