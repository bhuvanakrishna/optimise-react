import React, { useEffect } from 'react';

import Table from '../../components/Table';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Table />
      
      
        
        <Level5 user={props.user} />
        
      
    </div>
  );
};

export default Level4;
