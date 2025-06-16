import React from 'react';
import { Spin as AntSpin } from 'antd';

type Props = any;

const Spin = (props: Props) => {
  return <AntSpin {...props} />;
};

export default Spin;
