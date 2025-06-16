import React, { useEffect } from 'react';
import Level3 from './Level3';
import Input from '../../components/Input';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Input />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Level2);
