import React from "react";

import SampleGridTwo from "../components/grid/SampleGridTwo";

const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
  ];

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'controller' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your searched: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search by the following:
          <br /><br />
                        <select onChange={this.handleChange}>
                            <option value="controller">Controller LSDB ID</option>
                            <option value="processor">Processor LSDB ID</option>
                        </select>
                    </label>
                    <input type="submit" value="Search" />
                </form>
                <SampleGridTwo posts={posts} />
            </div>
        );
    }
}

export default FlavorForm;