import React, { useEffect } from 'react';
import Child from './Child';
import Tag from '../../components/Tag';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Tag />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level2;
