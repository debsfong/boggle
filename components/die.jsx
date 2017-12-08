import React from 'react';

class Die extends React.Component {
    
    render() {
        return (
            <div className={this.props.die.selected ? "die-selected" : "die"} id={this.props.die.recent ? "recent" : "selected"} onClick={this.props.selectLetter}>
                {this.props.die.value}
            </div>
        )
    }
}

export default Die;