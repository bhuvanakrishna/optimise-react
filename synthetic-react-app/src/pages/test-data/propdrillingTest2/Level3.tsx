import React, { useEffect } from 'react';
import Child from './Child';
import Alert from '../../components/Alert';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Alert />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level3;
