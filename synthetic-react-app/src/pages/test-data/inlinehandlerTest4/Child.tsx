import React, { useEffect } from 'react';

import Select from '../../components/Select';


const Child = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Select />
      
      
        <div>User: {props.user}</div>
        
        <button onClick={() => console.log('clicked')}>Click</button>
        
      
    </div>
  );
};

export default Child;
