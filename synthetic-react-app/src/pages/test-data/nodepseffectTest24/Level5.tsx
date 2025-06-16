import React, { useEffect } from 'react';
import Child from './Child';
import Upload from '../../components/Upload';


const Level5 = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Level5</h4>
      
      <Upload />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level5;
