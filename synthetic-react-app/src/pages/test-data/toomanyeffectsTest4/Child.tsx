import React, { useEffect } from 'react';

import RangePicker from '../../components/RangePicker';


const Child = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <RangePicker />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
