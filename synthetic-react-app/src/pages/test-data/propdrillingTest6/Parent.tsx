import React, { useEffect } from 'react';
import Level2 from './Level2';
import Progress from '../../components/Progress';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Progress />
      
      
        
        <Level2 user={props.user} />
        
      
    </div>
  );
};

export default Parent;
