import React, { Component } from 'react';

function NoCheckbox() {
    return (
        <div>
            <input type="checkbox" onClick={(e) => { e.preventDefault(); }} />
            It's prevented from checking.
    </div>
    )
}

class PreventDefault extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        };
        this.onChar = this.onChar.bind(this);
        this.onGoTime = this.onGoTime.bind(this);
    }

    onChar(event) {
        this.setState({ content: event.target.value });
    }

    onGoTime(event) {
        if (this.state.content !== "reload") {
            event.preventDefault();
        }
    }

    render() {
        return (
            <div>
                <h4>Event: preventDefault</h4>
                <br />
                <NoCheckbox />
                <br /><br />
                <form onSubmit={this.onGoTime}>
                    <input type="text" value={this.state.content} onChange={this.onChar} />
                    <input type="submit" value="Go Time" />
                </form>
            </div>
        )
    }
}

export default PreventDefault;