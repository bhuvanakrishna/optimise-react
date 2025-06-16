import React, { useEffect } from 'react';

import Modal from '../../components/Modal';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Modal />
      
      
        
        <Level4 user={props.user} />
        
      
    </div>
  );
};

export default Level3;
