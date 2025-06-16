import React, { useEffect } from 'react';
import Level5 from './Level5';
import Affix from '../../components/Affix';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Affix />
      
      
        
        <Level5 user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Level4);
