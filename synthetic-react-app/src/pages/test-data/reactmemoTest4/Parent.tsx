import React, { useEffect } from 'react';
import Level2 from './Level2';
import Spin from '../../components/Spin';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Spin />
      
      
        
        <Level2 user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Parent);
