import React, { useEffect } from 'react';
import Level2 from './Level2';
import Button from '../../components/Button';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Button />
      
      
        
        <Level2 user={props.user} />
        
      
    </div>
  );
};

export default Parent;
