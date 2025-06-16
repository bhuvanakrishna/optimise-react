import React, { useEffect } from 'react';
import Level2 from './Level2';
import DatePicker from '../../components/DatePicker';


const Parent = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <DatePicker />
      
      
        
        <Level2 user={props.user} />
        
      
    </div>
  );
};

export default Parent;
