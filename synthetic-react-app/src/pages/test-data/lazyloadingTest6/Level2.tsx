import React, { useEffect } from 'react';

import Card from '../../components/Card';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Card />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level2;
