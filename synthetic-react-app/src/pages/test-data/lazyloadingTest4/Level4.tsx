import React, { useEffect } from 'react';

import Button from '../../components/Button';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Button />
      
      
        
        <Level5 user={props.user} />
        
      
    </div>
  );
};

export default Level4;
