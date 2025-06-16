import React, { useEffect } from 'react';
import Level4 from './Level4';
import Popover from '../../components/Popover';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Popover />
      
      
        
        <Level4 user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Level3);
