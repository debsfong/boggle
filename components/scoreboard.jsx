import React from 'react';

class Scoreboard extends React.Component {
    constructor(props) {
        super(props);
        this.renderScores = this.renderScores.bind(this);
        this.getTotal = this.getTotal.bind(this);
    }
    
    renderScores() {
        let scores = this.props.scores;
        if (Object.keys(scores).length > 0) {
            return Object.keys(scores).map((word) => {
                return (
                    <tr className="scores-table">
                        <td>{word.toLowerCase()}</td>
                        <td>{scores[word]}</td>
                    </tr>
                );
            })
        } else {
            return (<tr></tr>);
        }
    }
    
    getTotal() {
        let total = 0
        Object.values(this.props.scores).map((score) => {
            total += score;
        })
        return total;
    }
    
    render() {
        return (
            <div className="scoring">
                <table className="scores-table">
                    <thead>
                        <tr>
                            <th>Word</th>
                            <th>Score</th>
                        </tr>  
                    </thead>
                    
                    <tbody>
                    {this.renderScores()}
                    </tbody>
                    
                    <tfoot>
                        <tr>
                            <th>Total</th>
                            <th>{this.getTotal()}</th>
                        </tr>
                    </tfoot>
                </table>
                
                <table className="points-table">
                    <thead>
                        <tr>
                            <th>Scoring</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td>1-2</td>
                            <td>0 points</td>
                        </tr>
                        <tr>
                            <td>3-4</td>
                            <td>1 points</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>2 points</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>3 points</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>5 points</td>
                        </tr>
                        <tr>
                            <td>8+</td>
                            <td>11 points</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Scoreboard;