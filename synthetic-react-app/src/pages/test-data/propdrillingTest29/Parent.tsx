import React, { useEffect } from 'react';
import Level2 from './Level2';
import Message from '../../components/Message';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Message />
      
      
        
        <Level2 user={props.user} />
        
      
    </div>
  );
};

export default Parent;
