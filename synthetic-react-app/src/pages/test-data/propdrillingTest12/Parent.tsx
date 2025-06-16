import React, { useEffect } from 'react';
import Level2 from './Level2';
import Card from '../../components/Card';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Card />
      
      
        
        <Level2 user={props.user} />
        
      
    </div>
  );
};

export default Parent;
