import React, { useEffect } from 'react';
import Level4 from './Level4';
import Card from '../../components/Card';


const Level3 = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Card />
      
      
        
        <Level4 user={props.user} />
        
      
    </div>
  );
};

export default Level3;
