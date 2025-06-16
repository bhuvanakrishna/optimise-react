import React, { useEffect } from 'react';
import Level5 from './Level5';
import Tooltip from '../../components/Tooltip';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Tooltip />
      
      
        
        <Level5 user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Level4);
