import React, { useEffect } from 'react';
import Level5 from './Level5';
import PasswordInput from '../../components/PasswordInput';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <PasswordInput />
      
      
        
        <Level5 user={props.user} />
        
      
    </div>
  );
};

export default Level4;
