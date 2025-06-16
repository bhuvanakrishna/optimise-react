import React, { useEffect } from 'react';

import Table from '../../components/Table';


const Child = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Table />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default React.memo(Child);
