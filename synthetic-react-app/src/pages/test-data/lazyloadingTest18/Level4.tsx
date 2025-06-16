import React, { useEffect } from 'react';

import Alert from '../../components/Alert';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Alert />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level4;
