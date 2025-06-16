import React, { useEffect } from 'react';
import Child from './Child';
import List from '../../components/List';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <List />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Level2);
