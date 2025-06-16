import React, { useEffect } from 'react';

import List from '../../components/List';


const Child = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <List />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
