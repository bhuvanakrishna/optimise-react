import React, { useEffect } from 'react';

import Badge from '../../components/Badge';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Badge />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
