import React, { useEffect } from 'react';

import Alert from '../../components/Alert';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Alert />
      
      
        
        <Level4 user={props.user} />
        
      
    </div>
  );
};

export default Level3;
