import React, { useEffect } from 'react';

import Upload from '../../components/Upload';


const Child = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Upload />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
