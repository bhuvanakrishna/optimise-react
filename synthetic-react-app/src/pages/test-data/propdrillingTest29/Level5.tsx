import React, { useEffect } from 'react';
import Child from './Child';
import Alert from '../../components/Alert';


const Level5 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level5</h4>
      
      <Alert />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level5;
