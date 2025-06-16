import React, { useEffect } from 'react';
import Child from './Child';
import Drawer from '../../components/Drawer';


const Parent = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Drawer />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Parent;
