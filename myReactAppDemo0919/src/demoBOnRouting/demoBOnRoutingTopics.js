import React from 'react';
import {Route, Link} from 'react-router-dom';

import DemoBOnRoutingTopic from './demoBOnRoutingTopic';

import data from './data.json';

const DemoBOnRoutingTopics = ({ match }) => (
  <div> 
    This is a topics
    <div>
    {data.map((item, id) => <div key={id}><Link to={{
      pathname: `${match.url}/${item._id}`,
      state: item
    }}>{item.name}</Link> </div>)}
      
    </div>
    <hr />

    <Route path={`${match.path}/:id`} component={DemoBOnRoutingTopic} />
  </div>
);

export default DemoBOnRoutingTopics;