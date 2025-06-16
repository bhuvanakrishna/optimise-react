import React, { useEffect } from 'react';
import Child from './Child';
import BackTop from '../../components/BackTop';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <BackTop />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level2;
