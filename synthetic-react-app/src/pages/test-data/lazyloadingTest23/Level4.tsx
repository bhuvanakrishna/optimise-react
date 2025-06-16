import React, { useEffect } from 'react';

import InputNumber from '../../components/InputNumber';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <InputNumber />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level4;
