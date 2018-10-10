import React, { Component } from 'react';

class EventCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { clicks: 0 };
        this.clickHandeler = this.clickHandler.bind(this);
    }

    clickHandler() {
        const clicksNew = this.state.clicks + 1;
        this.setState({ clicks: clicksNew });

        if (clicksNew % 2 === 0) {
            this.props.onEvenClick(clicksNew);
        }
    }

    render() {
        return (
            <div onClick={this.clickHandeler}>
                This div has been clicked {this.state.clicks} times.
            </div>
        )
    }
}

export default EventCounter;