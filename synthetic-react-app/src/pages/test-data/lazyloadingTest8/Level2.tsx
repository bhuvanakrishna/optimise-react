import React, { useEffect } from 'react';

import Input from '../../components/Input';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Input />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
