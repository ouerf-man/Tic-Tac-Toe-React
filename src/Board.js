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

    calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    handleClick(i) {
        let flag = true;
        const squares = this.state.squares.slice();
        if (squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        console.log(squares);
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
        for (let i = 0; i < squares.length; i++) {
            if (!squares[i]) flag = false;
        }



        if (this.calculateWinner(squares)) {
            alert(this.calculateWinner(squares) + " is the winner");
        }
        if (flag) {alert("game over")};

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
