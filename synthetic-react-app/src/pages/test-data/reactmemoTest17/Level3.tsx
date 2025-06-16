import React, { useEffect } from 'react';
import Child from './Child';
import Affix from '../../components/Affix';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Affix />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Level3);
