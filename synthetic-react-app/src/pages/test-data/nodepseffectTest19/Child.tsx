import React, { useEffect } from 'react';

import Affix from '../../components/Affix';


const Child = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Affix />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
