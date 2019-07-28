import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

import './Board.css';

export default class Square extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <button className="square" onClick={this.props.onClick} onMouseOver={this.props.sendIndex}>
                {this.props.value}
            </button>
        )
    }
}
