import React from 'react';
import Die from './die';

class Board extends React.Component {
    
    renderRows() {
        return this.props.grid.map( (row, i) => {
            return (
                <div className="row">
                    {
                        row.map ( (die, j) => {
                            let pos = [i, j]
                            return (<Die die={die} selectLetter={() => this.props.selectLetter(pos, die.value)}/>)
                        })
                    }
                </div>
            )
        })
    }
    
    render() {
        return (
            <div className="board">
                {this.renderRows()}
            </div>
        )
    }
}

export default Board;