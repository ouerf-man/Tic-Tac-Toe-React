import React from "react";
import Square from "./Square";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Board.css"

export default class Line extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            history: null
        }
    }

    sendData = (i) => {
        this.props.squareIndex(i);
    }

    renderSquare(i) {

        return (
            <Square
                value={this.props.squares[i]}
                sendIndex={()=>{this.sendData(i)}}
                onClick={() => {this.props.onClick(i);}}
            />
        );
    }

    render() {

        return (
            <div className="line">
                {this.renderSquare(this.props.start + 0)}
                {this.renderSquare(this.props.start + 1)}
                {this.renderSquare(this.props.start + 2)}
            </div>
        )
    }
}
