import React, { useEffect } from 'react';

import Avatar from '../../components/Avatar';


const Child = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Avatar />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
