import React, { useEffect } from 'react';
import Child from './Child';
import Table from '../../components/Table';


const Level3 = (props: any) => {
  
  
  
  const expensive = Array.from({ length: 1000 }).reduce((a, _, i) => a + i, 0);
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Table />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level3;
