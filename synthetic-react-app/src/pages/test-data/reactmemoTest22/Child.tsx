import React, { useEffect } from 'react';

import Affix from '../../components/Affix';


const Child = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Affix />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default React.memo(Child);
