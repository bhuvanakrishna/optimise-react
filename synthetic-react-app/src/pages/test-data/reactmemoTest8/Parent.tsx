import React, { useEffect } from 'react';
import Level2 from './Level2';
import Input from '../../components/Input';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Input />
      
      
        
        <Level2 user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Parent);
