import React from 'react';
import { Button as AntButton } from 'antd';

type Props = any;

const Button = (props: Props) => {
  return <AntButton {...props} />;
};

export default Button;
