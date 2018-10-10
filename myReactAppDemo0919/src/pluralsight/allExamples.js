import React, { Component } from 'react';
import PreventDefault from './topics/preventDefault';
import EventCounter from './topics/componentEvent';

class AllExamples extends Component {
    render() {
        return (
            <div className="container">
                <h3>All Pluralsight Example</h3>
                <br/>
                <hr/>
                <br/>
                <PreventDefault/>
                <br/>
                <hr/>
                <br/>
                <EventCounter onEvenClick={(data)=>{console.log(`even $(data)`);}}/>
                <br/>
                <hr/>
                <br/>
            </div>
        )
    }
}

export default AllExamples;