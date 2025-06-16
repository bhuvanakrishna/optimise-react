import React, { useEffect } from 'react';
import Level3 from './Level3';
import Spin from '../../components/Spin';


const Level2 = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Spin />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
