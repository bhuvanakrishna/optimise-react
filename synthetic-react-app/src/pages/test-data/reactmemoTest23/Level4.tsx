import React, { useEffect } from 'react';
import Child from './Child';
import List from '../../components/List';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <List />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Level4);
