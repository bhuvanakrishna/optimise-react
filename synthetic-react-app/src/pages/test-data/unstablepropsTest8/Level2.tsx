import React, { useEffect } from 'react';
import Level3 from './Level3';
import Message from '../../components/Message';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Message />
      
      
        
        <Level3 user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Level2;
