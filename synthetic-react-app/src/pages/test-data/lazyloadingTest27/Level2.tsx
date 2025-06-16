import React, { useEffect } from 'react';

import PasswordInput from '../../components/PasswordInput';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <PasswordInput />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
