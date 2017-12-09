import React from 'react';
import Board from './board';
import Scoreboard from './scoreboard';
import Current from './current';
import {generateBoard, getScore, adjacentPos} from '../util';

class Game extends React.Component{
    constructor() {
        super();
        this.grid = generateBoard();
        this.clean = JSON.parse(JSON.stringify(this.grid));
        this.selected = [];
        this.state = { grid: this.grid,
                       currentWord: "", 
                       scores: {}, 
                       invalid: false
        }
        
        this.selectLetter = this.selectLetter.bind(this);
        this.deselectLetter = this.deselectLetter.bind(this);
        this.submitWord = this.submitWord.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }
    
    renderErrors() {
        if (this.state.invalid == true) {
            return (
                <div className="errors">That is not a valid move!</div>
            )
        } else {
            return (<div className="instructions">Form words with adjacent letters</div>)
        }
    }
    
    deselectLetter(pos) {
        this.grid[pos[0]][pos[1]].recent = false;
        this.grid[pos[0]][pos[1]].selected = false;
        
        this.selected.pop();
        let recent = this.selected[this.selected.length - 1];
        
        if (recent) {
            this.grid[recent[0]][recent[1]].recent = true;
        }
        
        let newWord = this.state.currentWord.substring(0, this.state.currentWord.length - 1);
        
        this.setState({currentWord: newWord, grid: this.grid});
    }
    
    selectLetter(pos, value) {
        this.setState({invalid: false});
        let curPos = this.selected[this.selected.length - 1];
        
        if (curPos != null) {
            if ((pos[0] == curPos[0]) && (pos[1] == curPos[1])) {
                return this.deselectLetter(pos);
            } 
        }
        
        if (adjacentPos(curPos, pos)) {
            this.selected.push(pos);
            if (this.selected.length > 1) {
                this.grid[curPos[0]][curPos[1]].recent = false;
            }
            this.grid[pos[0]][pos[1]].recent = true;
            
            this.grid[pos[0]][pos[1]].selected = true;
            let newWord = this.state.currentWord + value;
            
            this.setState({currentWord: newWord, grid: this.grid});
        } else {
            this.setState({invalid: true});
        }
    }
    
    submitWord() {
        if (this.state.currentWord == "") {
            return;
        }
        this.state.scores[this.state.currentWord] = getScore(this.state.currentWord);
        this.grid = JSON.parse(JSON.stringify(this.clean));
        this.selected = [];
        
        this.setState({grid: this.grid, currentWord: "", scores: this.state.scores});
    }
    
    render() {
        return (
            <div>
                <h1><img src="logo.png" /></h1>
                <Board grid={this.state.grid} selectLetter={this.selectLetter} />
                {this.renderErrors()}
                <Current currentWord={this.state.currentWord} submitWord={this.submitWord} />
                <Scoreboard scores={this.state.scores} />
            </div>
        )
    }
}

export default Game;