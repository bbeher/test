import React from 'react';

const DemoBOnRoutingTopic = ({ location }) => (
  <div>
    <h1>{location.state.name}</h1>
    <h2>{location.state.email}</h2>
  </div>
)

export default DemoBOnRoutingTopic;