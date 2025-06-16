import React, { useEffect } from 'react';
import Child from './Child';
import List from '../../components/List';


const Parent = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <List />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Parent;
