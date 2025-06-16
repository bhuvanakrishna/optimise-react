import React, { useEffect } from 'react';

import MultiSelect from '../../components/MultiSelect';


const Child = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <MultiSelect />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default React.memo(Child);
