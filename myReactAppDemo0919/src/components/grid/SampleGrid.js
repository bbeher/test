import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SampleGrid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // data: 'sweta',
            dataArr: []
        }
    };

    componentDidMount() {
        var self = this;
        fetch('/test/api/details/get', {
            method: 'GET',
            credentials: "same-origin",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json()).then(function (data) {
            //resolve(Object.assign({}, data));
            self.setState({ dataArr: data });
            console.log(dataArr);
        }).catch(function (e) {
            console.log("some error!");
        });
    }

    render() {
        return (
            <div className="Container">
                <h3>Grid data fetching from server</h3>
                <br />

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Company</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.dataArr && this.state.dataArr.map(function (value, index) {
                            return (
                                <tr key={index}>
                                    <td>{value.name}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.company}</td>
                                    <td>{value.email}</td>
                                    <td>{value.phone}</td>
                                </tr>
                            );
                        })}
                    </tbody>

                </table>
            </div>
        )
    }
}

export default SampleGrid;

// function SampleGrid(props) {

//     const sidebar = (
//         <ul>
//             {props.posts.map((post) =>
//                 <li key={post.id}>
//                     {post.title}
//                 </li>
//             )}
//         </ul>
//     );
//     const content = props.posts.map((post) =>
//         <div key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//         </div>
//     );

//     const tableRow = gridData.map((item, id) =>
//         <tr key={id}>
//             <td>{item.name}</td>
//             <td>{item.gender}</td>
//             <td>{item.company}</td>
//             <td>{item.email}</td>
//             <td>{item.phone}</td>
//         </tr>
//     );

//     return (
//         <div className="container">

//             <h3>Grid data fetching from state data</h3>
//             <br />
//             <TableComponent />
//             <br /><br />

//             <h3>Grid data fetching from json</h3>
//             <br />
//             <div>
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Gender</th>
//                             <th>Company</th>
//                             <th>Email</th>
//                             <th>Phone</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {tableRow}
//                     </tbody>

//                 </table>
//             </div>

//             <br />
//             <h3>Some other component</h3>
//             {sidebar}
//             <hr />
//             {content}
//         </div>

//     );
// }

// export default SampleGrid;


