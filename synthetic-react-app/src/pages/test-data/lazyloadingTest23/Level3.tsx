import React, { useEffect } from 'react';

import Button from '../../components/Button';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Button />
      
      
        
        <Level4 user={props.user} />
        
      
    </div>
  );
};

export default Level3;
