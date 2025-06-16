import React, { useEffect } from 'react';

import Tag from '../../components/Tag';


const Child = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Tag />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
