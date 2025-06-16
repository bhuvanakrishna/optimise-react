import React, { useEffect } from 'react';
import Level3 from './Level3';
import Empty from '../../components/Empty';


const Level2 = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Empty />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
