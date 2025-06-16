import React, { useEffect } from 'react';
import Child from './Child';
import Input from '../../components/Input';


const Level2 = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Input />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level2;
