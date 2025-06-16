import React, { useEffect } from 'react';

import BackTop from '../../components/BackTop';


const Child = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <BackTop />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
