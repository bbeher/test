import React, { Component } from 'react';

class GridUsingSQLData extends Component {

    state = {
        actors: [],
        actor: {
            first_name: 'Vin',
            last_name: 'Diesel'
        }
    }


    componentDidMount() {
        this.getActors();
    }

    getActors = _ => {
        fetch('http://localhost:4000/actor')
            .then(response => response.json())
            // .then(({ data }) => {
            //     console.log(data)
            // })
            .then(response => this.setState({ actors: response.data }))
            .catch(err => console.error(err))
    }

    addActor = _ => {
        const { actor } = this.state;
        fetch(`http://localhost:4000/actor/add?first_name=${actor.first_name}&last_name=${actor.last_name}`)
            // .then(response => response.json())
            .then(this.getActors)
            .catch(err => console.error(err))

    }

    renderActor = ({ actor_id, first_name }) => <div key={actor_id}>{first_name}</div>

    render() {
        const { actors, actor } = this.state;
        return (
            <div className="container">
                <br/>
                <div>
                    <input
                        placeholder="firstname"
                        value={actor.first_name}
                        onChange={e => this.setState({ actor: { ...actor, first_name: e.target.value } })}
                    /> 
                    <input
                        placeholder="lastname"
                        value={actor.last_name}
                        onChange={e => this.setState({ actor: { ...actor, last_name: e.target.value } })}
                    /> 
                    <button onClick={this.addActor}>Add Actor</button>
                </div>

                <br/>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.actors && this.state.actors.map(function (value, index) {
                            return (
                                <tr key={index}>
                                    <td>{value.first_name}</td>
                                    <td>{value.last_name}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {/* <div>
                    {actors.map(this.renderActor)}
                </div> */}

            </div>
        );
    }
}

export default GridUsingSQLData;