import React, { useEffect } from 'react';
import Level4 from './Level4';
import TextArea from '../../components/TextArea';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <TextArea />
      
      
        
        <Level4 user={props.user} />
        
      
    </div>
  );
};

export default Level3;
