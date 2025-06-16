import React, { useEffect } from 'react';

import Message from '../../components/Message';


const Child = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Message />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
