import React, { useEffect } from 'react';
import Child from './Child';
import Message from '../../components/Message';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Message />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Level4);
