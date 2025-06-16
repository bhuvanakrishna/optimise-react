import React, { useEffect } from 'react';
import Level2 from './Level2';
import Collapse from '../../components/Collapse';


const Parent = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Collapse />
      
      
        
        <Level2 user={props.user} />
        
      
    </div>
  );
};

export default Parent;
