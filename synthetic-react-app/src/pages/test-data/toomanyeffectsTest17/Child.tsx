import React, { useEffect } from 'react';

import PasswordInput from '../../components/PasswordInput';


const Child = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <PasswordInput />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
