import React, { useEffect } from 'react';
import Child from './Child';
import TextArea from '../../components/TextArea';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <TextArea />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level4;
