import React, { useEffect } from 'react';

import TextArea from '../../components/TextArea';


const Child = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <TextArea />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
