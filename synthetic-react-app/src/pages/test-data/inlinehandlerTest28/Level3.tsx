import React, { useEffect } from 'react';
import Level4 from './Level4';
import Switch from '../../components/Switch';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Switch />
      
      
        
        <Level4 user={props.user} />
        
      
    </div>
  );
};

export default Level3;
