import React, { useEffect } from 'react';
import Level5 from './Level5';
import Tag from '../../components/Tag';


const Level4 = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Tag />
      
      
        
        <Level5 user={props.user} />
        
      
    </div>
  );
};

export default Level4;
