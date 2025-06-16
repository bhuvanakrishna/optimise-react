import React, { useEffect } from 'react';
import Child from './Child';
import Empty from '../../components/Empty';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Empty />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level4;
