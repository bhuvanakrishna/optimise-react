import React, { useEffect } from 'react';

import Alert from '../../components/Alert';


const Child = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Alert />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
