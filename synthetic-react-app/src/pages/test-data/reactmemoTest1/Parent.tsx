import React, { useEffect } from 'react';
import Level2 from './Level2';
import Switch from '../../components/Switch';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Switch />
      
      
        
        <Level2 user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Parent);
