import React, { useEffect } from 'react';

import Tag from '../../components/Tag';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Tag />
      
      
        
        <Level5 user={props.user} />
        
      
    </div>
  );
};

export default Level4;
