import React, { useEffect } from 'react';

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

export default Level3;
