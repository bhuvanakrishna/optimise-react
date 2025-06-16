import React, { useEffect } from 'react';

import Empty from '../../components/Empty';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Empty />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
