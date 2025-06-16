import React from 'react';
import { Empty as AntEmpty } from 'antd';

type Props = any;

const Empty = (props: Props) => {
  return <AntEmpty {...props} />;
};

export default Empty;
