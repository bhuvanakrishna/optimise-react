import React from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

type Props = any;

const RangePickerWrapper = (props: Props) => {
  return <RangePicker {...props} />;
};

export default RangePickerWrapper;
