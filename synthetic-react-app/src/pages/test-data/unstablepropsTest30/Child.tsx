import React, { useEffect } from 'react';

import Tabs from '../../components/Tabs';


const Child = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Tabs />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
