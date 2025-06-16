import React, { useEffect } from 'react';
import Level3 from './Level3';
import Image from '../../components/Image';


const Level2 = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Image />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
