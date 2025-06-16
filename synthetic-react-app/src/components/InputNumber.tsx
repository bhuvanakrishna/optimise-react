import React from 'react';
import { InputNumber as AntInputNumber } from 'antd';

type Props = any;

const InputNumber = (props: Props) => {
  return <AntInputNumber {...props} />;
};

export default InputNumber;
