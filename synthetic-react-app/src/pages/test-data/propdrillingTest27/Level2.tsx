import React, { useEffect } from 'react';
import Level3 from './Level3';
import TextArea from '../../components/TextArea';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <TextArea />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
