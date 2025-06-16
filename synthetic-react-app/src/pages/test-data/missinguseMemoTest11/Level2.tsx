import React, { useEffect } from 'react';
import Child from './Child';
import Affix from '../../components/Affix';


const Level2 = (props: any) => {
  
  
  
  const expensive = Array.from({ length: 1000 }).reduce((a, _, i) => a + i, 0);
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Affix />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level2;
