import React, { useEffect } from 'react';
import Level3 from './Level3';
import RangePicker from '../../components/RangePicker';


const Level2 = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <RangePicker />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
