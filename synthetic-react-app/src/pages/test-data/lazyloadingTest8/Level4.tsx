import React, { useEffect } from 'react';

import BackTop from '../../components/BackTop';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <BackTop />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level4;
