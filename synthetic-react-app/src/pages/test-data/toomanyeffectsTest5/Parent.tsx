import React, { useEffect } from 'react';
import Child from './Child';
import Spin from '../../components/Spin';


const Parent = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Spin />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Parent;
