import React, { useEffect } from 'react';

import Badge from '../../components/Badge';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Badge />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level4;
