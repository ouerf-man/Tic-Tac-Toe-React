import React from "react"
import Line from "./Line";
import "bootstrap/dist/css/bootstrap.min.css"

export default class Board extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            squareIndex: 0,
        }
    }

    getSquareIndex = (i) => {
        this.setState({squareIndex: i})
    };



    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }


    render() {
        return (
            <div className="board">
                <Line start={0}
                      squares={this.state.squares}
                      onClick={() => this.handleClick(this.state.squareIndex)}
                      squareIndex={this.getSquareIndex}
                />
                <Line start={3}
                      squares={this.state.squares}
                      onClick={() => this.handleClick(this.state.squareIndex)}
                      squareIndex={this.getSquareIndex}
                />
                <Line start={6}
                      squares={this.state.squares}
                      onClick={() => this.handleClick(this.state.squareIndex)}
                      squareIndex={this.getSquareIndex}
                />
            </div>
        )
    }
}
