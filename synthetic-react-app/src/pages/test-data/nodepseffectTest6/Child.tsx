import React, { useEffect } from 'react';

import Select from '../../components/Select';


const Child = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Select />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
