import React, { useEffect } from 'react';
import Level2 from './Level2';
import Alert from '../../components/Alert';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Alert />
      
      
        
        <Level2 user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Parent);
