import React, { useEffect } from 'react';

import Button from '../../components/Button';


const Child = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Button />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
