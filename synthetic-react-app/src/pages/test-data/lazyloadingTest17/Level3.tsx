import React, { useEffect } from 'react';

import Input from '../../components/Input';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Input />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level3;
