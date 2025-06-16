import React, { useEffect } from 'react';
import Child from './Child';
import Select from '../../components/Select';


const Level3 = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Select />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level3;
