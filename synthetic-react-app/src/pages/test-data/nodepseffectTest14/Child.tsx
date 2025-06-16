import React, { useEffect } from 'react';

import DatePicker from '../../components/DatePicker';


const Child = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <DatePicker />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
