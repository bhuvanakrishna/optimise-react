import React, { useEffect } from 'react';
import Level3 from './Level3';
import Tabs from '../../components/Tabs';


const Level2 = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Tabs />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
