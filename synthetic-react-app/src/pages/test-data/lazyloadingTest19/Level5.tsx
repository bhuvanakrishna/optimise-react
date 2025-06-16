import React, { useEffect } from 'react';

import Modal from '../../components/Modal';


const Level5 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level5</h4>
      
      <Modal />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level5;
