import React, { useEffect } from 'react';
import Level5 from './Level5';
import Alert from '../../components/Alert';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Alert />
      
      
        
        <Level5 user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Level4);
