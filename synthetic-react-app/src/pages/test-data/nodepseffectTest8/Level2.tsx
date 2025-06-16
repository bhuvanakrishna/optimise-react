import React, { useEffect } from 'react';
import Level3 from './Level3';
import Table from '../../components/Table';


const Level2 = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Table />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
