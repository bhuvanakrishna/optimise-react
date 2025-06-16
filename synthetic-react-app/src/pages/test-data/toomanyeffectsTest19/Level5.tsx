import React, { useEffect } from 'react';
import Child from './Child';
import TextArea from '../../components/TextArea';


const Level5 = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Level5</h4>
      
      <TextArea />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level5;
