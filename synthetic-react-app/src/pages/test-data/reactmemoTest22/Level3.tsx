import React, { useEffect } from 'react';
import Child from './Child';
import RadioGroup from '../../components/RadioGroup';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <RadioGroup />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Level3);
