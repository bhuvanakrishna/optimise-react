import React, { useEffect } from 'react';
import Child from './Child';
import Card from '../../components/Card';


const Level5 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level5</h4>
      
      <Card />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level5;
