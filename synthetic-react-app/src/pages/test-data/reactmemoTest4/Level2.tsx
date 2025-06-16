import React, { useEffect } from 'react';
import Level3 from './Level3';
import Avatar from '../../components/Avatar';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Avatar />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Level2);
