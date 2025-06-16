import React, { useEffect } from 'react';
import Level3 from './Level3';
import Card from '../../components/Card';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Card />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
