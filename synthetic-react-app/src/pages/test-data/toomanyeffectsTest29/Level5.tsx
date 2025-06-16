import React, { useEffect } from 'react';
import Child from './Child';
import Checkbox from '../../components/Checkbox';


const Level5 = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Level5</h4>
      
      <Checkbox />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level5;
