import React, { useEffect } from 'react';
import Child from './Child';
import Avatar from '../../components/Avatar';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Avatar />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Parent;
