import React, { useEffect } from 'react';
import Level4 from './Level4';
import Message from '../../components/Message';


const Level3 = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Message />
      
      
        
        <Level4 user={props.user} />
        
      
    </div>
  );
};

export default Level3;
