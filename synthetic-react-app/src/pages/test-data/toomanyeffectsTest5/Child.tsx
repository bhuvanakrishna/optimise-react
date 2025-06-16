import React, { useEffect } from 'react';

import InputNumber from '../../components/InputNumber';


const Child = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <InputNumber />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
