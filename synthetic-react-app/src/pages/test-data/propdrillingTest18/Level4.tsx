import React, { useEffect } from 'react';
import Child from './Child';
import Tag from '../../components/Tag';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Tag />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level4;
