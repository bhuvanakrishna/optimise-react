import React from 'react';
import { Progress as AntProgress } from 'antd';

type Props = any;

const Progress = (props: Props) => {
  return <AntProgress {...props} />;
};

export default Progress;
