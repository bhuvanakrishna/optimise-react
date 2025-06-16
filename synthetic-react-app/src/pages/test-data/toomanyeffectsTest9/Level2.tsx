import React, { useEffect } from 'react';
import Level3 from './Level3';
import MultiSelect from '../../components/MultiSelect';


const Level2 = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <MultiSelect />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
