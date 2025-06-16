import React, { useEffect } from 'react';
import Level2 from './Level2';
import Tag from '../../components/Tag';


const Parent = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Tag />
      
      
        
        <Level2 user={props.user} />
        
      
    </div>
  );
};

export default Parent;
