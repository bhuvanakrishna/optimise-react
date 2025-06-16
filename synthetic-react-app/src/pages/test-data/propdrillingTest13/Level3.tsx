import React, { useEffect } from 'react';
import Level4 from './Level4';
import Descriptions from '../../components/Descriptions';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Descriptions />
      
      
        
        <Level4 user={props.user} />
        
      
    </div>
  );
};

export default Level3;
