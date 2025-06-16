import React, { useEffect } from 'react';

import Button from '../../components/Button';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Button />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
