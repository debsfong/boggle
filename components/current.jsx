import React from 'react';

class Current extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="current">
                <p>Current Word: {this.props.currentWord}</p>
                <button onClick={this.props.submitWord}>Submit Word</button>
            </div>
        )
    }
}

export default Current;