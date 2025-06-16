import React, { useEffect } from 'react';
import Level5 from './Level5';
import Modal from '../../components/Modal';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Modal />
      
      
        
        <Level5 user={props.user} />
        
      
    </div>
  );
};

export default Level4;
