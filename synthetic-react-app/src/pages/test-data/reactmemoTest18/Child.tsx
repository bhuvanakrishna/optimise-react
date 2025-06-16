import React, { useEffect } from 'react';

import PasswordInput from '../../components/PasswordInput';


const Child = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <PasswordInput />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default React.memo(Child);
