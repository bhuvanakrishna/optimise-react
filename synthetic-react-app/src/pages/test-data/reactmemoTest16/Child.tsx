import React, { useEffect } from 'react';

import Tooltip from '../../components/Tooltip';


const Child = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Tooltip />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default React.memo(Child);
