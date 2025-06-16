import React from 'react';
import { Radio } from 'antd';

const { Group } = Radio;

type Props = any;

const RadioGroup = (props: Props) => {
  return <Group {...props} />;
};

export default RadioGroup;
