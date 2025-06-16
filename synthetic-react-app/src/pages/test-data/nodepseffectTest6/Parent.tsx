import React, { useEffect } from 'react';
import Level2 from './Level2';
import Empty from '../../components/Empty';


const Parent = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Empty />
      
      
        
        <Level2 user={props.user} />
        
      
    </div>
  );
};

export default Parent;
