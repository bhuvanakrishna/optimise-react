import React, { useEffect } from 'react';

import Affix from '../../components/Affix';


const Child = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Affix />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
