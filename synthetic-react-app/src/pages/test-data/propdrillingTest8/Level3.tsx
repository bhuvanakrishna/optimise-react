import React, { useEffect } from 'react';
import Level4 from './Level4';
import Badge from '../../components/Badge';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Badge />
      
      
        
        <Level4 user={props.user} />
        
      
    </div>
  );
};

export default Level3;
