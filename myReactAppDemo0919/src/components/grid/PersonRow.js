import React from 'react';

const PersonRow = props.data.map((person) => {

    <tr>


        <td>{person.data.id}</td>
        <td>{person.data.name}</td>
    </tr>


});

export default PersonRow;