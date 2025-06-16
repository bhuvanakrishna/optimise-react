import React, { useEffect } from 'react';
import Level2 from './Level2';
import Select from '../../components/Select';


const Parent = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Select />
      
      
        
        <Level2 user={props.user} />
        
      
    </div>
  );
};

export default Parent;
