import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import gridData from './gridData.json';
import gridDataUbs from './gridDataUbs.json';
import TableComponent from './grid-basic';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

function afterSearch(searchText, result) {
    console.log('Your search text is ' + searchText);
    console.log('Result is:');
    for (let i = 0; i < result.length; i++) {
        console.log('Fruit: ' + result[i].name + ', ' + result[i].gender + ', ' + result[i].company);
    }
}

const options = {
    afterSearch: afterSearch  // define a after search hook
};


function SampleGridTwo(props) {

    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );

    const tableRow = gridData.map((item, id) =>
        <tr key={id}>
            <td>{item.name}</td>
            <td>{item.gender}</td>
            <td>{item.company}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
        </tr>
    );

    const tableRowUbs = gridDataUbs.map((item, index) =>
        <tr key={index}>
            <td>{item.ControllerName}</td>
            <td>{item.ControllerLSDBID}</td>
            <td>{item.GDPRWaveValidity}</td>
            <td>{item.ProcessorName}</td>
            <td>{item.ProcessorLSDBID}</td>
            <td>{item.ProcessorEEA}</td>
            <td>{item.RegulatedJurisdiction}</td>
            <td>{item.Status}</td>
            <td>{item.PEDStatus}</td>
            <td>{item.DeltaView}</td>
            <td>{item.IDTA}</td>
            <td>{item.IDTALink}</td>
        </tr>
    );

    return (
        <div className="container">
            <br />
            {/* <h3>React Bootstrap Table</h3>
            <br/>
            <BootstrapTable data={gridData} search={ true } options={ options } height='auto' striped hover>
                <TableHeaderColumn isKey dataField='name'>Name</TableHeaderColumn>
                <TableHeaderColumn dataField='gender'>Gender</TableHeaderColumn>
                <TableHeaderColumn dataField='company'>Company</TableHeaderColumn>
            </BootstrapTable>
            <br/><br/> */}

            {/* <h3>Grid data fetching from state data</h3> */}
            {/* <br /> */}
            {/* <TableComponent /> */}
            <br /><br />

            {/* <h3>Grid data fetching from json</h3> */}
            <br />
            {/* <div>
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
                        {tableRow}
                    </tbody>

                </table>
            </div>


            <br />
            <h3>Some other component</h3>
            {sidebar}
            <hr />
            {content} */}

            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Controller Name</th>
                            <th>Controller LSDB ID</th>
                            <th>GDPR Wave Validity</th>
                            <th>Processor Name</th>
                            <th>Processor LSDB ID</th>
                            <th>Processor EEA + Jersey, Monaco & Switzerland Status</th>
                            <th>Regulated and/or Adequacy jurisdiction</th>
                            <th>Status</th>
                            <th>PED Status</th>
                            <th>Delta View</th>
                            <th>IDTA</th>
                            <th>IDTA Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRowUbs}
                    </tbody>

                </table>
            </div>
        </div>

    );
}

export default SampleGridTwo;


