import React, { useEffect } from 'react';

import Affix from '../../components/Affix';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Affix />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
