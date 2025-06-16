import React, { useEffect } from 'react';
import Child from './Child';
import Affix from '../../components/Affix';


const Level5 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level5</h4>
      
      <Affix />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level5;
