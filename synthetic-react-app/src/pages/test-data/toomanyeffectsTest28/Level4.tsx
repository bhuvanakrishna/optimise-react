import React, { useEffect } from 'react';
import Child from './Child';
import Tooltip from '../../components/Tooltip';


const Level4 = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Tooltip />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level4;
