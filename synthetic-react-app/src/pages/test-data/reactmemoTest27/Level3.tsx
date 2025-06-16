import React, { useEffect } from 'react';
import Child from './Child';
import PasswordInput from '../../components/PasswordInput';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <PasswordInput />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Level3);
