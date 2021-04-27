import React, { Component } from 'react';
import '../../css/Column2.css';
import  DisplayEquipments from '../DisplayEquipments/DisplayEquipments';
class Column2 extends Component {
	constructor(props) {
		super(props);
	}
    render() {
        return (
            <div className='Column2'>
				<DisplayEquipments state={this.props.state}/>
            </div>
        );
    }
}

export default Column2;