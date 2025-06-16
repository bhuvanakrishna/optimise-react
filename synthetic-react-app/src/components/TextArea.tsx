import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

type Props = any;

const TextAreaWrapper = (props: Props) => {
  return <TextArea {...props} />;
};

export default TextAreaWrapper;
