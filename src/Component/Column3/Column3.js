import React, { Component } from 'react';
import '../../css/Column3.css';
import  Shop from '../Shop/Shop';
import Trading from '../Trading/Trading';
class Column3 extends Component {
	constructor(props) {
			super(props);
		}
    render() {
        return (
            <div className='Column3'>
                <Shop state={this.props.state}/>
				<Trading state={this.props.state}/>
            </div>
        );
    }
}

export default Column3;