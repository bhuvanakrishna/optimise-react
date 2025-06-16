import React, { useEffect } from 'react';
import Child from './Child';
import Upload from '../../components/Upload';


const Level4 = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Upload />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level4;
