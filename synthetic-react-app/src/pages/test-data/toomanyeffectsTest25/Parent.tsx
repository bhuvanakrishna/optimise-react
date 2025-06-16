import React, { useEffect } from 'react';
import Child from './Child';
import Card from '../../components/Card';


const Parent = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Card />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Parent;
