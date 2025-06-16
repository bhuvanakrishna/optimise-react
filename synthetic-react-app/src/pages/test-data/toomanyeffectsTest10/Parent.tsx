import React, { useEffect } from 'react';
import Child from './Child';
import Image from '../../components/Image';


const Parent = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Image />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Parent;
