import React, { useEffect } from 'react';

import Modal from '../../components/Modal';


const Child = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Modal />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
