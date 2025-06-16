import React, { useEffect } from 'react';
import Level4 from './Level4';
import Avatar from '../../components/Avatar';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Avatar />
      
      
        
        <Level4 user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Level3;
