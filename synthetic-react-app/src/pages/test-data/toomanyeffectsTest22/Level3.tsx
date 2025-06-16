import React, { useEffect } from 'react';
import Child from './Child';
import MultiSelect from '../../components/MultiSelect';


const Level3 = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <MultiSelect />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level3;
