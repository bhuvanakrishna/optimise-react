import React from 'react';
import { Input } from 'antd';

const { Password } = Input;

type Props = any;

const PasswordInput = (props: Props) => {
  return <Password {...props} />;
};

export default PasswordInput;
