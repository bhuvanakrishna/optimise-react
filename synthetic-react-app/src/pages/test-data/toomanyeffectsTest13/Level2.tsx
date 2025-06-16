import React, { useEffect } from 'react';
import Level3 from './Level3';
import Dropdown from '../../components/Dropdown';


const Level2 = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Dropdown />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
