import React, { useEffect } from 'react';
import Child from './Child';
import Card from '../../components/Card';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Card />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Level3);
