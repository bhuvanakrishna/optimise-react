import React, { useEffect } from 'react';

import Avatar from '../../components/Avatar';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Avatar />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level2;
