import React, { useEffect } from 'react';
import Child from './Child';
import List from '../../components/List';


const Level3 = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <List />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level3;
