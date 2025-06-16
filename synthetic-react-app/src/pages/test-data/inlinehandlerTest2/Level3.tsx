import React, { useEffect } from 'react';
import Child from './Child';
import Upload from '../../components/Upload';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Upload />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level3;
