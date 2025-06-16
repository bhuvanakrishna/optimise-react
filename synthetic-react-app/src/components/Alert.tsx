import React from 'react';
import { Alert as AntAlert } from 'antd';

type Props = any;

const Alert = (props: Props) => {
  return <AntAlert {...props} />;
};

export default Alert;
