import React, { useEffect } from 'react';
import Level2 from './Level2';
import PasswordInput from '../../components/PasswordInput';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <PasswordInput />
      
      
        
        <Level2 user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Parent;
