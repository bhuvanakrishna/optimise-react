import React, { useEffect } from 'react';
import Level5 from './Level5';
import Input from '../../components/Input';


const Level4 = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Input />
      
      
        
        <Level5 user={props.user} />
        
      
    </div>
  );
};

export default Level4;
