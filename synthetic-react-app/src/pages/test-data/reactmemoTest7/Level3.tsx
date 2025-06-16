import React, { useEffect } from 'react';
import Child from './Child';
import Empty from '../../components/Empty';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Empty />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Level3);
